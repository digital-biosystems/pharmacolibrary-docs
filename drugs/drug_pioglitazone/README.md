<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;A10B&quot;,&quot;href&quot;:&quot;atc/A10B.md&quot;},{&quot;label&quot;:&quot;pioglitazone&quot;}]"></div>

# pioglitazone

- **generic name:** pioglitazone
- **ATC codes:** `A10BD05`, `A10BD06`, `A10BD09`, `A10BD12`, `A10BG03`
- **DrugBank:** [DB01132](https://go.drugbank.com/drugs/DB01132) · **PubChem:** [CID 4829](https://pubchem.ncbi.nlm.nih.gov/compound/4829)
- **molar mass:** 356.439 g/mol (C19H20N2O3S) — DrugBank
- **groups:** approved, investigational

## About

Pioglitazone is an anti-diabetic medicine used to lower blood sugar in type 2 diabetes. It remains authorised in the European Union, though several products there have been withdrawn, and it is also available in fixed-dose combinations with other oral diabetes drugs.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q417765](https://www.wikidata.org/wiki/Q417765) and the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## Molecular properties

> Molar masses support mass–molar conversion and metabolite stoichiometry. Sources: DrugBank (parent), reported values or identity-matched PubChem entries (metabolites).

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| pioglitazone | parent | 356.439 | C19H20N2O3S | DrugBank | [4829](https://pubchem.ncbi.nlm.nih.gov/compound/4829) | Kadam_2013 |
| carboxylic acid metabolite | metabolite | — (mass units only) | — | — | — | — |
| enzalutamide | metabolite | 464.437 | C21H16F4N4O2S | PubChem | [15951529](https://pubchem.ncbi.nlm.nih.gov/compound/15951529) | Gibbons_2015 |
| N-desmethyl enzalutamide | metabolite | 450.41 | C20H14F4N4O2S | PubChem | [70678916](https://pubchem.ncbi.nlm.nih.gov/compound/70678916) | Gibbons_2015 |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 16:12 | 1:09 | 0/2/0 | 0/0/1 | 0/0/5 | 90,005/6,534 | einfracz / qwen3.8-27b | 8 | 2/6 | 8/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.143), gpt-oss:120b (not confirmed, agreement 0.6). Primary extraction retained.">cross-check: disputed 0/2</span><br><sub>blocking: C8 unreachable/orphan compartment or unlinked metabolite</sub><br><sub>route_to: `human_review`</sub> | [Gibbons_2015_reference](drugs/drug_pioglitazone/Pioglitazone_Gibbons2015_reference.md) | — | general linear (no model) | 5 | Gibbons JA et al., Pharmacokinetic Drug Interaction Studie…, Clinical pharmacokinetics (2015) | [10.1007/s40262-015-0283-1](https://doi.org/10.1007/s40262-015-0283-1) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.375), gpt-oss:120b (not confirmed, agreement 0.778). Primary extraction retained.">cross-check: disputed 0/2</span><br><sub>STALE — current validate: rejected</sub><br><sub>blocking: C8 unreachable/orphan compartment or unlinked metabolite</sub><br><sub>route_to: `human_review`</sub> | [Kadam_2013_reference](drugs/drug_pioglitazone/Pioglitazone_Kadam2013_reference.md) | — | 1-compartment (no model) | 1 | Kadam R et al., Effect of Cytochrome P450 2C8*3 on the…, Biological & pharmaceutical… (2013) | [10.1248/bpb.b12-00657](https://doi.org/10.1248/bpb.b12-00657) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--green" title="re-read by einfracz:gpt-oss-120b (confirmed, agreement 1.0). Primary extraction retained.">cross-checked ✓</span> | [Tran_2026_ALT](drugs/drug_pioglitazone/pd_Tran_2026_ALT.md) | ALT ← pioglitazone · time-to-event model | — | Tran QT et al., Model-Based Meta-Analysis of the Relati…, CPT: pharmacometrics & syst… (2026) | [10.1002/psp4.70034](https://doi.org/10.1002/psp4.70034) |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--green" title="re-read by einfracz:gpt-oss-120b (confirmed, agreement 1.0). Primary extraction retained.">cross-checked ✓</span> | [Tran_2026_AST](drugs/drug_pioglitazone/pd_Tran_2026_AST.md) | AST ← pioglitazone · time-to-event model | — | Tran QT et al., Model-Based Meta-Analysis of the Relati…, CPT: pharmacometrics & syst… (2026) | [10.1002/psp4.70034](https://doi.org/10.1002/psp4.70034) |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--red" title="re-read by einfracz:gpt-oss-120b (not confirmed, agreement 0.5). Primary extraction retained.">cross-check: disputed</span> | [Tran_2026_Ballooning](drugs/drug_pioglitazone/pd_Tran_2026_Ballooning.md) | Ballooning ← pioglitazone · categorical (graded) response model | — | Tran QT et al., Model-Based Meta-Analysis of the Relati…, CPT: pharmacometrics & syst… (2026) | [10.1002/psp4.70034](https://doi.org/10.1002/psp4.70034) |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--red" title="re-read by einfracz:gpt-oss-120b (not confirmed, agreement 0.5). Primary extraction retained.">cross-check: disputed</span> | [Tran_2026_Fibrosis](drugs/drug_pioglitazone/pd_Tran_2026_Fibrosis.md) | Fibrosis ← pioglitazone · categorical (graded) response model | — | Tran QT et al., Model-Based Meta-Analysis of the Relati…, CPT: pharmacometrics & syst… (2026) | [10.1002/psp4.70034](https://doi.org/10.1002/psp4.70034) |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--red" title="re-read by einfracz:gpt-oss-120b (not confirmed, agreement 0.5). Primary extraction retained.">cross-check: disputed</span> | [Tran_2026_Inflammation](drugs/drug_pioglitazone/pd_Tran_2026_Inflammation.md) | Inflammation ← pioglitazone · categorical (graded) response model | — | Tran QT et al., Model-Based Meta-Analysis of the Relati…, CPT: pharmacometrics & syst… (2026) | [10.1002/psp4.70034](https://doi.org/10.1002/psp4.70034) |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--red" title="re-read by einfracz:gpt-oss-120b (not confirmed, agreement 0.5). Primary extraction retained.">cross-check: disputed</span> | [Tran_2026_Steatosis](drugs/drug_pioglitazone/pd_Tran_2026_Steatosis.md) | Steatosis ← pioglitazone · categorical (graded) response model | — | Tran QT et al., Model-Based Meta-Analysis of the Relati…, CPT: pharmacometrics & syst… (2026) | [10.1002/psp4.70034](https://doi.org/10.1002/psp4.70034) |

## Pharmacogenomics (PGx)

| status | gene | affects | mechanism | detail | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--neutral" title="Gene–drug association without a quantitative parameter effect.">qualitative</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss-120b (?, agreement 0.25). Primary extraction retained.">cross-check: partial</span> | **CYP2C8** | `Q69` · Q/F | metabolism | [Kadam_2013](drugs/drug_pioglitazone/pgx_Kadam_2013_CYP2C8_Q69.md) | Kadam R et al., Effect of Cytochrome P450 2C8*3 on the…, Biological & pharmaceutical… (2013) | [10.1248/bpb.b12-00657](https://doi.org/10.1248/bpb.b12-00657) |
| <span class="pk-badge pk-badge--neutral" title="Gene–drug association without a quantitative parameter effect.">qualitative</span> <span class="pk-badge pk-badge--green" title="re-read by gpt-oss-120b (confirmed, agreement 1.0), gpt-oss:120b (confirmed, agreement 1.0). Primary extraction retained.">cross-checked ✓ 2/2</span> | **ADORA1** | `Q100` — no parameter target — an association/risk finding, not a parameter shift | target | [Kawaguchi-Suzuki_2018](drugs/drug_pioglitazone/pgx_Kawaguchi_Suzuki_2018_ADORA1_Q100.md) | Kawaguchi-Suzuki M et al., A Genetic Score Associates With Pioglit…, Frontiers in pharmacology (2018) | [10.3389/fphar.2018.00752](https://doi.org/10.3389/fphar.2018.00752) |
| <span class="pk-badge pk-badge--neutral" title="Gene–drug association without a quantitative parameter effect.">qualitative</span> <span class="pk-badge pk-badge--green" title="re-read by gpt-oss-120b (confirmed, agreement 1.0), gpt-oss:120b (confirmed, agreement 1.0). Primary extraction retained.">cross-checked ✓ 2/2</span> | **CYP2C8** | `Q27` · CL/F | metabolism | [Kawaguchi-Suzuki_2018](drugs/drug_pioglitazone/pgx_Kawaguchi_Suzuki_2018_CYP2C8_Q27.md) | Kawaguchi-Suzuki M et al., A Genetic Score Associates With Pioglit…, Frontiers in pharmacology (2018) | [10.3389/fphar.2018.00752](https://doi.org/10.3389/fphar.2018.00752) |
| <span class="pk-badge pk-badge--neutral" title="Gene–drug association without a quantitative parameter effect.">qualitative</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.5), gpt-oss:120b (not confirmed, agreement 0.5). Primary extraction retained.">cross-check: disputed 0/2</span> | **LPL** | `Q100` — no parameter target — an association/risk finding, not a parameter shift | unknown | [Kawaguchi-Suzuki_2018](drugs/drug_pioglitazone/pgx_Kawaguchi_Suzuki_2018_LPL_Q100.md) | Kawaguchi-Suzuki M et al., A Genetic Score Associates With Pioglit…, Frontiers in pharmacology (2018) | [10.3389/fphar.2018.00752](https://doi.org/10.3389/fphar.2018.00752) |
| <span class="pk-badge pk-badge--neutral" title="Gene–drug association without a quantitative parameter effect.">qualitative</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss-120b (confirmed, agreement 1.0), gpt-oss:120b (?, agreement 0.25). Primary extraction retained.">cross-check: partial 1/2</span> | **PPARG** | `Q100` — no parameter target — an association/risk finding, not a parameter shift | target | [Kawaguchi-Suzuki_2018](drugs/drug_pioglitazone/pgx_Kawaguchi_Suzuki_2018_PPARG_Q100.md) | Kawaguchi-Suzuki M et al., A Genetic Score Associates With Pioglit…, Frontiers in pharmacology (2018) | [10.3389/fphar.2018.00752](https://doi.org/10.3389/fphar.2018.00752) |

<details class="pk-legend"><summary>PGx evidence and model availability</summary><table><tbody><tr><td><span class="pk-badge pk-badge--green">quantitative</span></td><td>Phenotype/genotype-specific effect on a named model parameter (θ).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">qualitative</span></td><td>Gene–drug association without a quantitative parameter effect.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">guideline estimate</span></td><td>CPIC/DPWG-derived estimate, not a primary-paper estimate.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">safety allele</span></td><td>Adverse-reaction risk allele; no quantitative PK/PD parameter effect.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>the extraction is incomplete or inconsistent.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted.</td></tr><tr><td><span class="pk-badge pk-badge--green">▶ simulatable</span></td><td>Phenotype-specific browser simulation and downloadable PGx model available.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">model only</span></td><td>PGx model available; browser simulation unavailable.</td></tr></tbody></table></details>

<details class="legend">
<summary>PGx field definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>gene</code></td><td>Associated gene; papers with multiple genes contribute multiple records.</td></tr><tr><td><code>affects</code></td><td>Target PK/PD parameter (Q-code and name); θ scales its baseline value. Q100 denotes a non-parameter association; safety denotes adverse-reaction risk. PA identifiers indicate ClinPGx/PharmGKB guideline-derived records.</td></tr><tr><td><code>mechanism</code></td><td>Metabolism, transport, target, formation, safety_allele, or unknown.</td></tr><tr><td><code>detail</code></td><td>Source-paper identifier and full-record link.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

## Coverage

- **PubMed hits:** 231 matched, 62 returned
- **screened:** 6  ·  **relevant:** 2
- **records:** 2  ·  extracted 0  ·  needs_review 0  ·  rejected 2  ·  stale 1
- **scholar-agent fallback query used:** not captured

## Full-text requests

_18 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Clark_2012.pdf` | Clark MH et al., Pharmacokinetics of pioglitazone in lea…, Journal of veterinary pharm… (2012) | popPK | 9 | [10.1111/j.1365-2885.2011.01341.x](https://doi.org/10.1111/j.1365-2885.2011.01341.x) | [22612529](https://pubmed.ncbi.nlm.nih.gov/22612529) | The study is a PK study in cats reporting NCA parameters (t1/2, Tmax, Cmax, AUC, F) but specific compartmental values (CL, V, Q) or ka are not explicitly listed in the evidence text. |
| `Sherwin_2011.pdf` | Sherwin CM et al., Optimal study design for pioglitazone i…, Journal of pharmacokinetics… (2011) | popPK | 8 | [10.1007/s10928-011-9202-8](https://doi.org/10.1007/s10928-011-9202-8) | [21667139](https://pubmed.ncbi.nlm.nih.gov/21667139) | The paper describes a population PK model design for pioglitazone, but the specific numeric parameter values (CL, V, etc.) are not present in the provided abstract, which only mentions that they were comparable to literature values. |
| `El-Shoukrofy_2025.pdf` | El-Shoukrofy MS et al., Novel thiazolones for the simultaneous…, European journal of medicin… (2025) | pd | 5 | [10.1016/j.ejmech.2025.117415](https://doi.org/10.1016/j.ejmech.2025.117415) | [40022874](https://www.ncbi.nlm.nih.gov/pubmed/40022874) | metadata signals extractable PD data (IC50) |
| `Goto_2017.pdf` | Goto A et al., Influence of the pharmacokinetic profil…, Biopharmaceutics & drug dis… (2017) | pd | 5 | [10.1002/bdd.2076](https://doi.org/10.1002/bdd.2076) | [28294376](https://www.ncbi.nlm.nih.gov/pubmed/28294376) | metadata signals extractable PD data (PK/PD) |
| `Matthews_2009.pdf` | Matthews L et al., Thiazolidinediones are partial agonists…, Endocrinology (2009) | pd | 4 | [10.1210/en.2008-0196](https://doi.org/10.1210/en.2008-0196) | [18801908](https://www.ncbi.nlm.nih.gov/pubmed/18801908) | metadata signals extractable PD data (EC50) |
| `Sears_2007.pdf` | Sears DD et al., Selective modulation of promoter recrui…, Biochemical and biophysical… (2007) | pd | 4 | [10.1016/j.bbrc.2007.10.057](https://doi.org/10.1016/j.bbrc.2007.10.057) | [17963725](https://www.ncbi.nlm.nih.gov/pubmed/17963725) | metadata signals extractable PD data (EC50) |
| `Aquilante_2013.pdf` | Aquilante CL et al., Impact of the CYP2C8 *3 polymorphism on…, British journal of clinical… (2013) | pgx | 8 | [10.1111/j.1365-2125.2012.04343.x](https://doi.org/10.1111/j.1365-2125.2012.04343.x) | [22625877](https://www.ncbi.nlm.nih.gov/pubmed/22625877) | metadata signals extractable PGX data (CYP2C8, PK/PD-context) |
| `Dawed_2016.pdf` | Dawed AY et al., CYP2C8 and SLCO1B1 Variants and Therape…, Diabetes care (2016) | pgx | 8 | [10.2337/dc15-2464](https://doi.org/10.2337/dc15-2464) | [27271184](https://www.ncbi.nlm.nih.gov/pubmed/27271184) | metadata signals extractable PGX data (CYP2C8, PK/PD-context) |
| `Kalliokoski_2010.pdf` | Kalliokoski A et al., SLCO1B1 polymorphism and oral antidiabe…, Basic & clinical pharmacolo… (2010) | pgx | 8 | [10.1111/j.1742-7843.2010.00581.x](https://doi.org/10.1111/j.1742-7843.2010.00581.x) | [20406215](https://www.ncbi.nlm.nih.gov/pubmed/20406215) | metadata signals extractable PGX data (SLCO1B1, PK/PD-context) |
| `Tornio_2008.pdf` | Tornio A et al., Trimethoprim and the CYP2C8*3 allele ha…, Drug metabolism and disposi… (2008) | pgx | 8 | [10.1124/dmd.107.018010](https://doi.org/10.1124/dmd.107.018010) | [17913794](https://www.ncbi.nlm.nih.gov/pubmed/17913794) | metadata signals extractable PGX data (CYP2C8*3, PK/PD-context) |
| `Choi_2016.pdf` | Choi JS et al., Effects of pioglitazone on the pharmaco…, European journal of drug me… (2016) | pgx | 7 | [10.1007/s13318-014-0249-y](https://doi.org/10.1007/s13318-014-0249-y) | [25549928](https://www.ncbi.nlm.nih.gov/pubmed/25549928) | metadata signals extractable PGX data (CYP3A4, PK/PD-context) |
| `Cui_2008.pdf` | Cui X et al., Application and interpretation of hPXR…, Biochemical pharmacology (2008) | pgx | 7 | [10.1016/j.bcp.2008.06.016](https://doi.org/10.1016/j.bcp.2008.06.016) | [18647599](https://www.ncbi.nlm.nih.gov/pubmed/18647599) | metadata signals extractable PGX data (CYP3A4, PK/PD-context) |
| `Dey_2020.pdf` | Dey S et al., Simultaneous Pharmacokinetics Estimatio…, Journal of chromatographic… (2020) | pgx | 7 | [10.1093/chromsci/bmz116](https://doi.org/10.1093/chromsci/bmz116) | [31836899](https://www.ncbi.nlm.nih.gov/pubmed/31836899) | metadata signals extractable PGX data (CYP2C9, PK/PD-context) |
| `Jaakkola_2005.pdf` | Jaakkola T et al., Effects of gemfibrozil, itraconazole, a…, Clinical pharmacology and t… (2005) | pgx | 7 | [10.1016/j.clpt.2004.12.266](https://doi.org/10.1016/j.clpt.2004.12.266) | [15900286](https://www.ncbi.nlm.nih.gov/pubmed/15900286) | metadata signals extractable PGX data (CYP3A4, PK/PD-context) |
| `Jaakkola_2006.pdf` | Jaakkola T et al., Pioglitazone is metabolised by CYP2C8 a…, Basic & clinical pharmacolo… (2006) | pgx | 7 | [10.1111/j.1742-7843.2006.pto_437.x](https://doi.org/10.1111/j.1742-7843.2006.pto_437.x) | [16867170](https://www.ncbi.nlm.nih.gov/pubmed/16867170) | metadata signals extractable PGX data (CYP2C8, PK/PD-context) |
| `Mamindla_2017.pdf` | Mamindla S et al., Effect of Cinnamomum cassia on the Phar…, Current clinical pharmacolo… (2017) | pgx | 7 | [10.2174/1574884712666170207152020](https://doi.org/10.2174/1574884712666170207152020) | [28176623](https://www.ncbi.nlm.nih.gov/pubmed/28176623) | metadata signals extractable PGX data (CYP3A4, PK/PD-context) |
| `Takanohashi_2007.pdf` | Takanohashi T et al., Prediction of the metabolic interaction…, Drug metabolism and pharmac… (2007) | pgx | 7 | [10.2133/dmpk.22.409](https://doi.org/10.2133/dmpk.22.409) | [18159128](https://www.ncbi.nlm.nih.gov/pubmed/18159128) | metadata signals extractable PGX data (CYP2C9, PK/PD-context) |
| `Yates_2012.pdf` | Yates P et al., Statistical methods for analysis of tim…, Drug metabolism and disposi… (2012) | pgx | 7 | [10.1124/dmd.112.047233](https://doi.org/10.1124/dmd.112.047233) | [22942318](https://www.ncbi.nlm.nih.gov/pubmed/22942318) | metadata signals extractable PGX data (CYP3A4, PK/PD-context) |

<sub>queue written 2026-10-07T16:11:20.127127+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Abushammala_2015 | irrelevant | 1 | 0 | Pioglitazone is only a co-administered drug used to probe the pharmacokinetics of carbamazepine, and no PK parameters for pioglitazone itself are reported. |
| PGx | Abushammala_2015 | not_relevant | 0 | 0 | The study evaluates a drug-drug interaction in rabbits, not a pharmacogenomic effect of a gene variant on pioglitazone PK/PD. |
| popPK | Aftab_2019 | irrelevant | 0 | 0 | This is a clinical efficacy study for bipolar depression, not a pharmacokinetic study, and no PK parameters are reported. |
| PGx | Albassam_2019 | not_relevant | 0 | 0 | The paper investigates the effect of a chemical inhibitor (pterostilbene) on enzyme activity, not the effect of a gene variant/genotype on pharmacokinetics or pharmacodynamics. |
| popPK | Almeida_2011 | irrelevant | 2 | 1 | This is a bioequivalence study reporting only geometric mean ratios and confidence intervals for Cmax and AUC, without providing absolute quantitative disposition parameters like clearance (CL) or volume (V). |
| PGx | Choi_2016 | not_relevant | 0 | 0 | The study investigates drug-drug interactions (pioglitazone affecting nifedipine PK in rats) rather than pharmacogenomic effects (gene variants affecting pioglitazone PK/PD). |
| PGx | Cui_2008 | not_relevant | 0 | 0 | The paper discusses CYP3A4 induction by pioglitazone as a control in an assay, not a pharmacogenomic effect of a gene variant on the drug's PK/PD parameters. |
| PGx | Dawed_2016 | not_relevant | 0 | 0 | The study explicitly states that neither CYP2C8 nor SLCO1B1 variants had a significant impact on pioglitazone response, with pharmacogenomic findings limited to rosiglitazone. |
| PGx | Dey_2020 | not_relevant | 0 | 0 | The study investigates drug-drug interactions between nateglinide and pioglitazone, not pharmacogenomic effects on pioglitazone's PK/PD. |
| popPK | El-Shoukrofy_2025 | irrelevant | 0 | 0 | no_text gate: only 136 chars of text extracted (&lt; 400) |
| PD | El-Shoukrofy_2025 | not_relevant | 0 | 0 | The paper focuses on novel thiazolones and does not report pharmacodynamic or exposure-response data for pioglitazone. |
| PGx | Gibbons_2015 | not_relevant | 0 | 0 | The paper investigates drug-drug interactions with enzalutamide and does not report on the effect of gene variants or genotypes on pioglitazone pharmacokinetics or pharmacodynamics. |
| popPK | Goto_2017 | irrelevant | 0 | 0 | no_text gate: only 133 chars of text extracted (&lt; 400) |
| PD | Goto_2017 | not_relevant | 0 | 0 | The provided text is only the title of the paper and does not contain the full text, data, or numeric PD parameters required to assess the exposure-response relationship. |
| popPK | Gupta_2023 | irrelevant | 0 | 0 | The study uses pioglitazone only as a reference comparator for antidiabetic potency (binding affinity and glucose lowering) and does not report pharmacokinetic parameters for pioglitazone. |
| popPK | Hamrén_2012 | irrelevant | 0 | 0 | The study focuses on the PK of tesaglitazar, with pioglitazone serving only as a comparator arm without reported PK parameters. |
| PD | Hamrén_2012 | not_relevant | 0 | 0 | The paper focuses on the pharmacokinetic-pharmacodynamic modeling of tesaglitazar, not pioglitazone; pioglitazone is only mentioned as a comparator arm without specific PD parameter analysis. |
| PGx | He_2012 | not_relevant | 0 | 0 | The paper reviews the PK/PD of vildagliptin, not pioglitazone, and does not report any pharmacogenomic effects. |
| popPK | Hwang_2020 | irrelevant | 1 | 0 | The study reports only geometric mean ratios (GMRs) for interaction assessment and does not provide absolute quantitative PK parameters (CL, V, T1/2) or population PK model estimates for pioglitazone. |
| PD | Hwang_2020 | not_relevant | 2 | 1 | The study reports qualitative changes in glucose levels and PK parameters (Cmax, AUC) but does not provide numeric PD parameters (e.g., Emax, EC50) or a quantitative concentration-effect model for pioglitazone. |
| PGx | Jaakkola_2005 | not_relevant | 0 | 0 | The study investigates drug-drug interactions (gemfibrozil and itraconazole) rather than the effect of a specific gene variant or genotype on pioglitazone pharmacokinetics or pharmacodynamics. |
| PGx | Jaakkola_2006 | not_relevant | 0 | 0 | The study investigates CYP2C8 and CYP3A4 enzyme-mediated metabolism and inhibition in vitro, but does not report any pharmacogenomic effects (gene variants, SNPs, or genotypes) on PK or PD parameters. |
| PGx | Kalliokoski_2010 | not_relevant | 0 | 0 | The paper explicitly states that SLCO1B1 genotype had no effect on the pharmacokinetics of pioglitazone. |
| popPK | Kasahara_2016 | irrelevant | 2 | 0 | Pioglitazone is a co-administered comparator in a drug-drug interaction study for tofogliflozin, and no quantitative PK parameters (CL, V, ka) for pioglitazone are provided in the evidence. |
| PD | Kasahara_2016 | not_relevant | 0 | 0 | The study evaluates drug-drug interactions on tofogliflozin's PK/PD and co-administered drugs' PK, but does not report a concentration- or dose-response relationship for pioglitazone itself. |
| PGx | Kawaguchi-Suzuki_2018 | not_relevant | 3 | 5 | The paper reports associations between genotypes and clinical/histological outcomes (NAS, fibrosis), but does not report changes in pharmacokinetic parameters (e.g., AUC, Cmax) or direct pharmacodynamic biomarkers defined by exposure-response relationships; it is a clinical pharmacogenomic study of response. |
| popPK | Kumar_2006 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of centchroman in rats, with pioglitazone used only as a coadministered drug for interaction assessment. |
| PD | Kumar_2006 | not_relevant | 0 | 0 | The paper investigates drug-drug interactions on the pharmacokinetics of centchroman, not the pharmacodynamics of pioglitazone; pioglitazone is only a co-administered agent in a PK interaction study. |
| PGx | Loer_2022 | not_relevant | 0 | 0 | The paper focuses on the pharmacokinetics of clopidogrel; pioglitazone is only mentioned as a co-administered inhibitor in drug-drug interaction simulations, not as the subject of a pharmacogenomic study. |
| PGx | Ly_2021 | not_relevant | 0 | 0 | The paper investigates the utility of a transgenic mouse model to assess CYP3A induction by pioglitazone, but it does not report pharmacogenomic effects of human genetic variants on pioglitazone's PK or PD parameters. |
| PGx | Mamindla_2017 | not_relevant | 0 | 0 | The paper investigates a drug-herb interaction (Cinnamon), not a pharmacogenomic effect (gene variant/genotype). |
| popPK | Matthews_2009 | irrelevant | 0 | 0 | no_text gate: only 71 chars of text extracted (&lt; 400) |
| PD | Matthews_2009 | not_relevant | 0 | 0 | The provided text is a title/abstract snippet regarding the mechanism of action (glucocorticoid receptor partial agonism) and does not contain any PK/PD data, exposure-response analysis, or numeric PD parameters for pioglitazone. |
| PGx | Nowak_2002 | not_relevant | 0 | 0 | The study investigates the effect of pioglitazone on CYP3A4 activity in a general population, not the effect of a specific genetic variant on pioglitazone's PK/PD. |
| PGx | Ogilvie_2006 | not_relevant | 0 | 0 | The paper investigates the mechanism of drug-drug interaction (gemfibrozil inhibiting CYP2C8) and its implications for substrates like pioglitazone, but it does not report a pharmacogenomic effect (gene variant changing PK/PD) for pioglitazone. |
| popPK | Ormseth_2013 | irrelevant | 0 | 0 | The study is a clinical trial evaluating the anti-inflammatory effects of pioglitazone in rheumatoid arthritis patients and does not report pharmacokinetic parameters such as clearance or volume. |
| popPK | Ormseth_2014 | irrelevant | 0 | 0 | This is a clinical trial focused on vascular and metabolic outcomes (augmentation index, insulin resistance) of pioglitazone, not a pharmacokinetic study; no PK parameters are reported. |
| PGx | Pradeepkumar_2022 | not_relevant | 0 | 0 | The paper investigates a drug-drug interaction (trazodone affecting pioglitazone PK/PD) and does not report on the influence of any gene variant, genotype, or phenotype. |
| popPK | Sears_2007 | irrelevant | 0 | 0 | no_text gate: only 86 chars of text extracted (&lt; 400) |
| PD | Sears_2007 | not_relevant | 0 | 0 | The paper focuses on the molecular mechanism of PPARgamma promoter recruitment and transcriptional activity, not on pharmacokinetic or pharmacodynamic exposure-response modeling for pioglitazone. |
| popPK | Sherwin_2011 | relevant | 8 | 0 | The paper describes a population PK model design for pioglitazone, but the specific numeric parameter values (CL, V, etc.) are not present in the provided abstract, which only mentions that they were comparable to literature values. |
| PGx | Singh_2019 | not_relevant | 0 | 0 | The paper discusses PXR activation potential and drug-drug interactions, not pharmacogenomic effects of gene variants on PK/PD parameters. |
| PGx | Spence_2020 | not_relevant | 0 | 0 | The paper is a review of stroke prevention strategies including pioglitazone use, but does not report any pharmacogenomic effects on pioglitazone PK/PD parameters. |
| PGx | Sun_2017 | not_relevant | 0 | 0 | The paper discusses CYP3A4 induction modeling and protein binding of pioglitazone, but does not report any gene variants, genotypes, or pharmacogenomic effects on PK/PD parameters. |
| PGx | Takanohashi_2007 | not_relevant | 0 | 0 | The paper discusses drug-drug interactions (nateglinide and pioglitazone), not pharmacogenomic effects. |
| popPK | Tran_2026 | irrelevant | 0 | 0 | The study is a model-based meta-analysis of the efficacy of pioglitazone on histological and liver enzyme outcomes in MASH, not a pharmacokinetic study reporting disposition parameters. |
| PGx | Türk_2020 | not_relevant | 1 | 0 | The paper focuses on a PBPK model for trimethoprim to predict drug-drug and drug-drug-gene interactions, rather than reporting specific pharmacogenomic effect sizes on pioglitazone's PK parameters as the primary outcome. |
| PGx | Wu_2025 | not_relevant | 0 | 0 | The paper investigates the causal effect of antidiabetic drugs on kidney stone risk using Mendelian randomization and rat models, but does not report pharmacogenomic effects on the pharmacokinetic or pharmacodynamic parameters of pioglitazone itself. |
| PGx | Yang_2020 | not_relevant | 0 | 0 | The paper uses pioglitazone as a drug hit in a computational screen for geroprotectors and does not report any pharmacogenomic effects on its pharmacokinetic or pharmacodynamic parameters. |
| PGx | Yates_2012 | not_relevant | 0 | 0 | The paper focuses on statistical methods for analyzing time-dependent enzyme inhibition (drug-drug interaction potential) and does not report pharmacogenomic effects (gene variants) on PK/PD parameters. |
| PGx | van_2013 | not_relevant | 1 | 2 | The study investigates how oral antidiabetic drugs (including pioglitazone) inhibit OATP1B1-mediated transport of rosuvastatin, rather than how a genetic variant changes the PK/PD of pioglitazone itself. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-07 16:11 UTC</sub>
