<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N06A&quot;,&quot;href&quot;:&quot;atc/N06A.md&quot;},{&quot;label&quot;:&quot;trazodone&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Trazodone_Cuomo2026v2_reference&quot;,&quot;label&quot;:&quot;Cuomo_2026_2_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_trazodone/Trazodone_Cuomo2026v2_reference.md&quot;,&quot;status&quot;:&quot;extracted \u00b7 stale&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

# trazodone

- **generic name:** trazodone
- **ATC codes:** `N06AX05`
- **DrugBank:** [DB00656](https://go.drugbank.com/drugs/DB00656) · **PubChem:** [CID 5533](https://pubchem.ncbi.nlm.nih.gov/compound/5533)
- **molar mass:** 371.864 g/mol (C19H22ClN5O) — DrugBank
- **groups:** approved, investigational

## About

Trazodone is an antidepressant used for depression, and also for conditions such as anxiety, insomnia, sleep-wake disorders, delirium and neurotic disorders. It is an approved medicine in widespread clinical use, though it carries a boxed warning.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q411457](https://www.wikidata.org/wiki/Q411457) and the WHO ATC classification; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 18:58 | 3:09 | 1/1/0 | 0/0/1 | 0/0/1 | 137,656/10,001 | einfracz / qwen3.8-27b | 8 | 1/8 | 6/2 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.556), gpt-oss:120b (not confirmed, agreement 0.625). The first reading is what the record holds.">cross-check: disputed 0/2</span><br><sub>STALE — current validate: extracted</sub><br><sub>route_to: `engineer_replication`</sub> | [Cuomo_2026_2_reference](drugs/drug_trazodone/Trazodone_Cuomo2026v2_reference.md) | ▶ model + simulator | 1-compartment, IV | 2 | Cuomo A et al., A narrative review on trazodone as a mu…, Annals of general psychiatry (2026) | [10.1186/s12991-026-00643-8](https://doi.org/10.1186/s12991-026-00643-8) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss-120b (primary re-run, agreement 0.429), gpt-oss:120b (partly confirmed, agreement 0.5). The first reading is what the record holds.">cross-check: partial 0/2</span> <span class="pk-badge pk-badge--species" title="Animal study (horse), not measured in people (from an LLM reading of the title and abstract by gpt-6-luna, p(non-human) 1.00).">horse</span><br><sub>STALE — current validate: rejected</sub><br><sub>blocking: missing key parameters — none reported by this paper</sub><br><sub>route_to: `human_review`</sub> | [Knych_2017_reference](drugs/drug_trazodone/Trazodone_Knych2017_reference.md) | — | 1-compartment (no model) | 0 | Knych HK et al., Pharmacokinetics and selected pharmacod…, American journal of veterin… (2017) | [10.2460/ajvr.78.10.1182](https://doi.org/10.2460/ajvr.78.10.1182) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--red" title="re-read by einfracz:gpt-oss-120b (not confirmed, agreement 0.0). The first reading is what the record holds.">cross-check: disputed</span> <span class="pk-badge pk-badge--species" title="The paper reports both human and animal data (from the LLM relevance screen, p(non-human) 0.50).">human + animal</span> | [Oggianu_2023_W](drugs/drug_trazodone/pd_Oggianu_2023_W.md) | number of writhings ← trazodone · direct linear effect | model (no simulator) | Oggianu L et al., PK/PD analysis of trazodone and gabapen…, Clinical and translational… (2023) | [10.1111/cts.13472](https://doi.org/10.1111/cts.13472) |

## Pharmacogenomics (PGx)

| status | gene | affects | mechanism | detail | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--neutral" title="the paper links the gene to the drug but states no effect size on a model parameter, so it changes no model.">qualitative</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss-120b (?, agreement 0.25). The first reading is what the record holds.">cross-check: partial</span> | **CYP2D6** | `Q22` · CL | metabolism | [Wiss_2026](drugs/drug_trazodone/pgx_Wiss_2026_CYP2D6_Q22.md) | Wiss FM et al., CYP2D6 Phenotype as a Predictor of Adve…, Journal of clinical psychop… (2026) | [10.1097/JCP.0000000000002123](https://doi.org/10.1097/JCP.0000000000002123) |

<details class="pk-legend"><summary>PGx evidence and model availability</summary><table><tbody><tr><td><span class="pk-badge pk-badge--green">quantitative</span></td><td>Phenotype/genotype-specific effect on a named model parameter (θ).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">qualitative</span></td><td>Gene–drug association without a quantitative parameter effect.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">guideline estimate</span></td><td>CPIC/DPWG-derived estimate, not a primary-paper estimate.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">safety allele</span></td><td>Adverse-reaction risk allele; no quantitative PK/PD parameter effect.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>the extraction is incomplete or inconsistent.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted.</td></tr><tr><td><span class="pk-badge pk-badge--green">▶ simulatable</span></td><td>Phenotype-specific browser simulation and downloadable PGx model available.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">model only</span></td><td>PGx model available; browser simulation unavailable.</td></tr></tbody></table></details>

<details class="legend">
<summary>PGx field definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>gene</code></td><td>Associated gene; papers with multiple genes contribute multiple records.</td></tr><tr><td><code>affects</code></td><td>Target PK/PD parameter (Q-code and name); θ scales its baseline value. Q100 denotes a non-parameter association; safety denotes adverse-reaction risk. PA identifiers indicate ClinPGx/PharmGKB guideline-derived records.</td></tr><tr><td><code>mechanism</code></td><td>Metabolism, transport, target, formation, safety_allele, or unknown.</td></tr><tr><td><code>detail</code></td><td>Source-paper identifier and full-record link.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=trazodone).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | blood-brain barrier | `ABCB1` inducer | DrugBank actor |
| absorption | kidney | `ABCB1` inducer | DrugBank actor |
| absorption | liver | `ABCB1` inducer | DrugBank actor |
| absorption | placenta | `ABCB1` inducer | DrugBank actor |
| absorption | small intestine | `ABCB1` inducer | DrugBank actor |
| absorption | testis | `ABCB1` inducer | DrugBank actor |
| metabolism | brain | `CYP2D6` inhibitor/metabolism/substrate | DrugBank actor |
| metabolism | kidney | `CYP3A5` substrate | DrugBank actor |
| metabolism | liver | `CYP2D6` inhibitor/metabolism/substrate, `CYP3A4` substrate, `CYP3A5` substrate, `CYP3A7` substrate | DrugBank actor |
| metabolism | small intestine | `CYP3A4` substrate, `CYP3A5` substrate | DrugBank actor |
| excretion | bile duct | <sub>named in DrugBank's ADME text</sub> | prose |
| excretion | kidney | <sub>named in DrugBank's ADME text</sub> | prose |
| — | brain | `SLC6A4` inhibitor | DrugBank actor |
| — | platelet | `SLC6A4` inhibitor | DrugBank actor |

<sub>Actors without a tissue in the table: ADRA1A (target), ADRA2A (target), HRH1 (target), HTR1A (partial agonist), HTR1A (target), HTR2A (target), HTR2C (target).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

## Coverage

- **PubMed hits:** 81 matched, 53 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 2  ·  extracted 1  ·  needs_review 0  ·  rejected 1  ·  stale 2
- **scholar-agent fallback query used:** not captured

## Full-text requests

_15 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Knych_2017.pdf` | Knych HK et al., Pharmacokinetics and selected pharmacod…, American journal of veterin… (2017) | popPK | 10 | [10.2460/ajvr.78.10.1182](https://doi.org/10.2460/ajvr.78.10.1182) | [28945130](https://pubmed.ncbi.nlm.nih.gov/28945130) | The paper reports specific quantitative pharmacokinetic parameters (clearance, volume of distribution, half-life) for trazodone in horses directly in the text. |
| `Cheng_1999.pdf` | Cheng FC et al., Pharmacokinetic and pharmacodynamic ana…, Journal of pharmaceutical a… (1999) | popPK | 9 | [10.1016/s0731-7085(98)00117-4](https://doi.org/10.1016/s0731-7085(98)00117-4) | [10704094](https://pubmed.ncbi.nlm.nih.gov/10704094) | The study reports a one-compartment model and first-order elimination rate constant for trazodone in rat striatum, but specific numeric parameter values are not present in the provided text. |
| `Zhu_2019.pdf` | Zhu JL et al., Pharmacokinetics of trazodone sustained…, International journal of cl… (2019) | popPK | 8 | [10.5414/CP203482](https://doi.org/10.5414/CP203482) | [31262398](https://pubmed.ncbi.nlm.nih.gov/31262398) | The paper reports pharmacokinetic characteristics of trazodone but provides no numeric parameter values (e.g., CL, V, Cmax, AUC) in the extracted evidence. |
| `Malomvölgyi_1991.pdf` | Malomvölgyi B et al., Comparison of serotonin agonistic and a…, Acta physiologica Hungarica (1991) | pd | 4 | not captured | [1814162](https://www.ncbi.nlm.nih.gov/pubmed/1814162) | metadata signals extractable PD data (EC50) |
| `Marcoli_1998.pdf` | Marcoli M et al., Trazodone is a potent agonist at 5-HT2C…, The Journal of pharmacology… (1998) | pd | 4 | not captured | [9618398](https://www.ncbi.nlm.nih.gov/pubmed/9618398) | metadata signals extractable PD data (EC50) |
| `Han_2022.pdf` | Han M et al., Effects of CYP2D6 Genetic Polymorphism…, Chemical research in toxico… (2022) | pgx | 8 | [10.1021/acs.chemrestox.1c00327](https://doi.org/10.1021/acs.chemrestox.1c00327) | [34936353](https://www.ncbi.nlm.nih.gov/pubmed/34936353) | metadata signals extractable PGX data (CYP2D6, PK/PD-context) |
| `Mihara_1997.pdf` | Mihara K et al., Relationship between the CYP2D6 genotyp…, Psychopharmacology (1997) | pgx | 8 | [10.1007/s002130050376](https://doi.org/10.1007/s002130050376) | [9335086](https://www.ncbi.nlm.nih.gov/pubmed/9335086) | metadata signals extractable PGX data (CYP2D6, PK/PD-context) |
| `Mihara_2001.pdf` | Mihara K et al., Effects of genetic polymorphism of CYP1…, Pharmacology & toxicology (2001) | pgx | 8 | [10.1034/j.1600-0773.2001.d01-115.x](https://doi.org/10.1034/j.1600-0773.2001.d01-115.x) | [11393588](https://www.ncbi.nlm.nih.gov/pubmed/11393588) | metadata signals extractable PGX data (CYP1A2, PK/PD-context) |
| `Saiz-Rodríguez_2017.pdf` | Saiz-Rodríguez M et al., Pharmacogenetics of trazodone in health…, Pharmacogenomics (2017) | pgx | 8 | [10.2217/pgs-2017-0116](https://doi.org/10.2217/pgs-2017-0116) | [29061081](https://www.ncbi.nlm.nih.gov/pubmed/29061081) | metadata signals extractable PGX data (CYP3A4, PK/PD-context) |
| `Saiz-Rodríguez_2018.pdf` | Saiz-Rodríguez M et al., Effect of ABCB1 C3435T Polymorphism on…, Basic & clinical pharmacolo… (2018) | pgx | 8 | [10.1111/bcpt.13031](https://doi.org/10.1111/bcpt.13031) | [29723928](https://www.ncbi.nlm.nih.gov/pubmed/29723928) | metadata signals extractable PGX data (ABCB1, PK/PD-context) |
| `Costa_2025.pdf` | Costa Alegre MD et al., Metabolism of m-CPP, trazodone, nefazod…, Drug metabolism reviews (2025) | pgx | 7 | [10.1080/03602532.2025.2465482](https://doi.org/10.1080/03602532.2025.2465482) | [39945551](https://www.ncbi.nlm.nih.gov/pubmed/39945551) | metadata signals extractable PGX data (CYP3A4, PK/PD-context) |
| `Kalgutkar_2003.pdf` | Kalgutkar AS et al., Assessment of the contributions of CYP3…, Drug metabolism and disposi… (2003) | pgx | 7 | [10.1124/dmd.31.3.243](https://doi.org/10.1124/dmd.31.3.243) | [12584149](https://www.ncbi.nlm.nih.gov/pubmed/12584149) | metadata signals extractable PGX data (CYP3A4, PK/PD-context) |
| `Schwasinger-Schmidt_2019.pdf` | Schwasinger-Schmidt TE et al., Other Antidepressants, Handbook of experimental ph… (2019) | pgx | 7 | [10.1007/164_2018_167](https://doi.org/10.1007/164_2018_167) | [30194544](https://www.ncbi.nlm.nih.gov/pubmed/30194544) | metadata signals extractable PGX data (CYP3A4, PK/PD-context) |
| `Yasui_1995.pdf` | Yasui N et al., Inhibition of trazodone metabolism by t…, Therapeutic drug monitoring (1995) | pgx | 7 | [10.1097/00007691-199508000-00003](https://doi.org/10.1097/00007691-199508000-00003) | [7482685](https://www.ncbi.nlm.nih.gov/pubmed/7482685) | metadata signals extractable PGX data (CYP2D6, PK/PD-context) |
| `Zalma_2000.pdf` | Zalma A et al., In vitro metabolism of trazodone by CYP…, Biological psychiatry (2000) | pgx | 7 | [10.1016/s0006-3223(99)00176-6](https://doi.org/10.1016/s0006-3223(99)00176-6) | [10745059](https://www.ncbi.nlm.nih.gov/pubmed/10745059) | metadata signals extractable PGX data (CYP3A, PK/PD-context) |

<sub>queue written 2026-10-07T18:56:01.897070+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| PGx | Baumann_1992 | not_relevant | 1 | 1 | The text is an abstract introducing the pharmacokinetics of SSRI/serotonergic drugs and discussing potential for genetic polymorphisms generally, but it does not report specific pharmacogenomic findings for trazodone. |
| popPK | Cheng_1999 | relevant | 9 | 0 | The study reports a one-compartment model and first-order elimination rate constant for trazodone in rat striatum, but specific numeric parameter values are not present in the provided text. |
| popPK | Clineschmidt_1985 | irrelevant | 0 | 0 | The study characterizes 5-HT receptors in rat stomach fundus and uses trazodone only as a competitive antagonist probe, reporting no pharmacokinetic parameters for trazodone. |
| PD | Clineschmidt_1985 | not_relevant | 1 | 0 | The paper characterizes 5-HT receptors in rat stomach fundus and mentions trazodone only as a less potent competitive antagonist without providing specific numeric PD parameters (like Ki or IC50) for trazodone in the text. |
| PGx | Costa_2025 | not_relevant | 0 | 0 | The text is a review on the metabolism and forensic aspects of mCPP and its precursor antidepressants, with no mention of specific gene variants or pharmacogenomic effects on PK/PD parameters. |
| PGx | Cua_2025 | not_relevant | 0 | 0 | The paper focuses on drug-drug interactions and does not analyze the effect of gene variants/genotypes on PK/PD parameters of trazodone. |
| popPK | Cuomo_2026 | irrelevant | 0 | 0 | no_text gate: only 183 chars of text extracted (&lt; 400) |
| PD | Cuomo_2026 | not_relevant | 0 | 0 | The text is a correction notice regarding dose unit conversions in a narrative review and contains no pharmacodynamic data, models, or numeric PD parameters. |
| popPK | Cuomo_2026_2 | irrelevant | 3 | 4 | This is a narrative review summarizing trazodone pharmacokinetics, but it cites values from other sources (FDA label, specific trials) rather than presenting original PK modeling or data, and it focuses on formulation comparisons and clinical applications. |
| PD | Cuomo_2026_2 | not_relevant | 2 | 1 | The paper is a narrative review that qualitatively describes dose-dependent effects (e.g., sedation at 25-75 mg vs. antidepressant at 150-300 mg) but does not report or provide numeric PD parameters (Emax, EC50) or a quantitative exposure-response model. |
| PGx | Davis_2007 | not_relevant | 0 | 0 | The paper discusses general pharmacology and metabolism but does not report specific gene variants or their effects on trazodone PK/PD parameters. |
| PGx | Ellingrod_1995 | not_relevant | 0 | 0 | The text describes the pharmacology of nefazodone and does not report any pharmacogenomic effects on trazodone. |
| PGx | Ferdinande_2024 | not_relevant | 2 | 1 | This is a rare case report of hepatotoxicity, likely describing an adverse event mechanism rather than a systematic pharmacokinetic or pharmacodynamic quantification of trazodone parameters modified by CYP2D6 genotype. |
| popPK | Gex-Fabry_2004 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics and clinical response of venlafaxine, with trazodone serving only as a permitted comedication without specific PK parameter reporting. |
| PGx | Han_2022 | not_relevant | 0 | 0 | The study investigates the effect of CYP2D6 variants and drug interactions on dacomitinib metabolism, not on trazodone. |
| PGx | Holm_1999 | not_relevant | 0 | 0 | The paper reviews the efficacy and tolerability of mirtazapine and does not discuss the pharmacogenomics of trazodone. |
| PGx | Izzo_2009 | not_relevant | 0 | 0 | The paper discusses herb-drug interactions (e.g., Ginkgo/Trazodone) but does not report any pharmacogenomic effects (gene variants/genotypes) on PK or PD parameters. |
| PGx | Kalgutkar_2003 | not_relevant | 0 | 0 | The paper focuses on the metabolism of haloperidol and its drug-drug interactions with antidepressants, not the pharmacogenomic effects on the PK/PD of trazodone. |
| popPK | Malomvölgyi_1991 | irrelevant | 0 | 0 | no_text gate: only 163 chars of text extracted (&lt; 400) |
| PD | Malomvölgyi_1991 | not_relevant | 0 | 0 | The paper studies a different drug (Trelibet/EGYT-475) and its metabolite, not trazodone. |
| popPK | Marcoli_1998 | irrelevant | 0 | 0 | no_text gate: only 148 chars of text extracted (&lt; 400) |
| PD | Marcoli_1998 | not_relevant | 3 | 2 | The paper describes a qualitative mechanism of action (agonism at 5-HT2C receptors) but does not provide numeric PD parameters (e.g., EC50, Emax) or an exposure-response curve for trazodone. |
| popPK | Marcoli_2001 | irrelevant | 0 | 0 | The paper is a mechanistic study of presynaptic receptors in rat tissue using trazodone as a pharmacological probe, not a pharmacokinetic study. |
| popPK | Maura_2000 | irrelevant | 0 | 0 | This is an in-vitro mechanistic study on receptor pharmacology in tissue slices, not a pharmacokinetic study. |
| PD | Maura_2000 | not_relevant | 2 | 1 | The study is an in vitro slice experiment testing receptor mechanisms; it reports a single qualitative inhibition by trazodone at 1 microM without deriving a dose-response curve or numeric PD parameters (e.g., EC50) for the drug. |
| PGx | Mihara_1997 | not_relevant | 0 | 0 | The study reports no significant difference in steady-state plasma concentrations of trazodone or mCPP based on CYP2D6 genotype, indicating a null result. |
| PGx | Mihara_1997_2 | not_relevant | 1 | 2 | The study reports a drug-drug interaction (haloperidol) affecting plasma concentrations, not the effect of a gene variant/genotype on PK/PD parameters. |
| PGx | Mihara_2001 | not_relevant | 3 | 8 | The study explicitly concludes that the CYP1A2 polymorphism did not have predictive value for the steady-state plasma concentrations of trazodone, reporting no significant differences between genotypes. |
| PGx | Moog_2022 | not_relevant | 0 | 0 | The study reports the general efficacy of trazodone on seizure frequency in a zebrafish model, but does not analyze any specific human gene variant or pharmacogenomic factor affecting the drug's PK/PD profile. |
| PGx | Najibi_2016 | not_relevant | 0 | 0 | The paper investigates drug metabolism and cytotoxicity in hepatocytes but does not report pharmacogenomic effects (gene variants) on PK or PD parameters. |
| popPK | Oggianu_2023 | relevant | 6 | 2 | The study develops population PK models for trazodone in mice and humans, but the specific numeric parameter estimates (CL, V, Q, ka) are referenced as being in supplementary Tables (S2, S4, S5) and are not present in the provided text. |
| popPK | Pancrazio_1998 | irrelevant | 0 | 0 | The study is an in-vitro electrophysiological investigation of sodium channel inhibition, not a pharmacokinetic study reporting disposition parameters like clearance or volume. |
| PGx | Petrucci_2025 | not_relevant | 0 | 0 | The study characterizes drug metabolism and CYP inhibition in vitro using specific enzymes or inhibitors, but does not report pharmacokinetic or pharmacodynamic data influenced by specific human gene variants or genotypes. |
| PGx | Pradeepkumar_2022 | not_relevant | 0 | 0 | The study reports a drug-drug interaction (trazodone altering pioglitazone's PK/PD) but does not investigate any gene variants, genotypes, or genetic phenotypes (e.g., CYP3A4 polymorphisms) that would define a pharmacogenomic effect. |
| PGx | Rotzinger_1998 | not_relevant | 0 | 0 | The paper identifies the CYP3A4 enzyme responsible for trazodone metabolism but does not report on gene variants, genotypes, or phenotypes affecting PK/PD parameters. |
| PGx | Schwasinger-Schmidt_2019 | not_relevant | 0 | 0 | The text is a general pharmacology and clinical review of various antidepressants, including trazodone, and does not report any genetic variants or pharmacogenomic effects on PK/PD parameters. |
| PGx | Wen_2008 | not_relevant | 4 | 1 | The paper reports CYP2D6-mediated bioactivation and formation of toxic reactive metabolites rather than changes in standard pharmacokinetic or pharmacodynamic parameters. |
| PGx | Yasui_1995 | not_relevant | 2 | 5 | The study investigates a drug-drug interaction (inhibition by thioridazine) rather than a pharmacogenomic effect based on CYP2D6 genotype or phenotype. |
| PGx | Zalma_2000 | not_relevant | 0 | 0 | The paper investigates pharmacokinetic drug-drug interactions involving CYP3A inhibition, but it does not report differences in PK/PD parameters based on genetic variants or genotypes. |
| PGx | Zaręba_2022 | not_relevant | 0 | 0 | The paper reports the synthesis and pharmacological activity (receptor binding, antidepressant-like behavior) of trazodone analogues, not the effect of gene variants on trazodone PK/PD. |
| popPK | Zhu_2019 | relevant | 8 | 0 | The paper reports pharmacokinetic characteristics of trazodone but provides no numeric parameter values (e.g., CL, V, Cmax, AUC) in the extracted evidence. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-07 18:56 UTC</sub>
