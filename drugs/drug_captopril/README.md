<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;C09A&quot;,&quot;href&quot;:&quot;atc/C09A.md&quot;},{&quot;label&quot;:&quot;captopril&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Captopril_Hu2025_reference&quot;,&quot;label&quot;:&quot;Hu_2025_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_captopril/Captopril_Hu2025_reference.md&quot;,&quot;status&quot;:&quot;extracted \u00b7 stale&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

# captopril

- **generic name:** captopril
- **ATC codes:** `C09AA01`, `C09BA01`
- **DrugBank:** [DB01197](https://go.drugbank.com/drugs/DB01197) · **PubChem:** [CID 44093](https://pubchem.ncbi.nlm.nih.gov/compound/44093)
- **molar mass:** 217.285 g/mol (C9H15NO3S) — DrugBank
- **groups:** approved, investigational

## About

Captopril is an ACE inhibitor used to treat high blood pressure and congestive heart failure, and has also been used for conditions such as Raynaud disease and rheumatoid arthritis. It is an approved medicine and remains in use, generally as an oral antihypertensive, though it carries a boxed warning.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q421119](https://www.wikidata.org/wiki/Q421119) and the WHO ATC classification; not checked by a person.</small>

## Molecular properties

> Molar masses support mass–molar conversion and metabolite stoichiometry. Sources: DrugBank (parent), reported values or identity-matched PubChem entries (metabolites).

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| captopril | parent | 217.285 | C9H15NO3S | DrugBank | [44093](https://pubchem.ncbi.nlm.nih.gov/compound/44093) | Duchin_1982, Kiriyama_2024 |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 05:32 | 17:33 | 1/1/4 | 1/0/0 | 1/0/1 | 322,397/42,214 | ollama / qwen3.8:27b-mtp-q8_0 | 42 | 20/21 | 22/20 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss-120b (partly confirmed, agreement 0.8), gpt-oss:120b (partly confirmed, agreement 0.8). Primary extraction retained.">cross-check: partial 0/2</span><br><sub>STALE — current validate: extracted</sub><br><sub>route_to: `engineer_replication`</sub> | [Hu_2025_reference](drugs/drug_captopril/Captopril_Hu2025_reference.md) | ▶ model + simulator | 1-compartment, IV | 2 | Hu L et al., A Systematic Review of Population Pharm…, Drug design, development an… (2025) | [10.2147/DDDT.S553073](https://doi.org/10.2147/DDDT.S553073) |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.111), gpt-oss:120b (not confirmed, agreement 0.105). Primary extraction retained.">cross-check: disputed 0/2</span><br><sub>STALE — current validate: needs_review</sub><br><sub>blocking: disposition incomplete — only volume extracted — the engineer needs clearance/e…</sub><br><sub>blocking: C5 dimensioned parameter(s) without a unit: Q17 — no SI value to build from</sub><br><sub>route_to: `human_review`</sub> | [Duchin_1982_intravenous_dose_total_radioactivity](drugs/drug_captopril/Captopril_Duchin1982_intravenous_dose_total_radioactivity.md) | — | 1-compartment (no model) | 3 | Duchin KL et al., Captopril kinetics, Clinical pharmacology and t… (1982) | [10.1038/clpt.1982.59](https://doi.org/10.1038/clpt.1982.59) |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.111), gpt-oss:120b (not confirmed, agreement 0.105). Primary extraction retained.">cross-check: disputed 0/2</span><br><sub>STALE — current validate: needs_review</sub><br><sub>blocking: disposition incomplete — only volume extracted — the engineer needs clearance/e…</sub><br><sub>route_to: `human_review`</sub> | [Duchin_1982_intravenous_dose_unchanged_captopril](drugs/drug_captopril/Captopril_Duchin1982_intravenous_dose_unchanged_captopril.md) | — | 1-compartment (no model) | 3 | Duchin KL et al., Captopril kinetics, Clinical pharmacology and t… (1982) | [10.1038/clpt.1982.59](https://doi.org/10.1038/clpt.1982.59) |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.1), gpt-oss:120b (not confirmed, agreement 0.095). Primary extraction retained.">cross-check: disputed 0/2</span><br><sub>STALE — current validate: needs_review</sub><br><sub>blocking: disposition incomplete — only volume extracted — the engineer needs clearance/e…</sub><br><sub>route_to: `human_review`</sub> | [Duchin_1982_oral_dose_total_radioactivity](drugs/drug_captopril/Captopril_Duchin1982_oral_dose_total_radioactivity.md) | — | 1-compartment (no model) | 5 | Duchin KL et al., Captopril kinetics, Clinical pharmacology and t… (1982) | [10.1038/clpt.1982.59](https://doi.org/10.1038/clpt.1982.59) |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.1), gpt-oss:120b (not confirmed, agreement 0.095). Primary extraction retained.">cross-check: disputed 0/2</span><br><sub>STALE — current validate: needs_review</sub><br><sub>blocking: disposition incomplete — only volume extracted — the engineer needs clearance/e…</sub><br><sub>route_to: `human_review`</sub> | [Duchin_1982_oral_dose_unchanged_captopril](drugs/drug_captopril/Captopril_Duchin1982_oral_dose_unchanged_captopril.md) | — | 1-compartment (no model) | 5 | Duchin KL et al., Captopril kinetics, Clinical pharmacology and t… (1982) | [10.1038/clpt.1982.59](https://doi.org/10.1038/clpt.1982.59) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (confirmed, agreement 1.0), gpt-oss:120b (not confirmed, agreement 0.087). Primary extraction retained.">cross-check: disputed 1/2</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">rat</span><br><sub>STALE — current validate: rejected</sub><br><sub>blocking: C9 clearance/volume outside physiological window (implausible magnitude — unit/…</sub><br><sub>route_to: `human_review`</sub> | [Kiriyama_2024_reference](drugs/drug_captopril/Captopril_Kiriyama2024_reference.md) | — | 1-compartment (no model) | 9 | Kiriyama A et al., Exploring the multiple effects of nifed…, Pharmacology research & per… (2024) | [10.1002/prp2.1249](https://doi.org/10.1002/prp2.1249) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">reviewed — candidate</span> <span class="pk-badge pk-badge--green" title="re-read by einfracz:gpt-oss-120b (confirmed, agreement 1.0). Primary extraction retained.">cross-checked ✓</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">rat</span> | [Kiriyama_2024_BP](drugs/drug_captopril/pd_Kiriyama_2024_BP.md) | blood pressure ← captopril · direct sigmoid Emax (Hill) effect | model (no simulator) | Kiriyama A et al., Exploring the multiple effects of nifed…, Pharmacology research & per… (2024) | [10.1002/prp2.1249](https://doi.org/10.1002/prp2.1249) |
| <span class="pk-badge pk-badge--green">reviewed — candidate</span> <span class="pk-badge pk-badge--green" title="re-read by einfracz:gpt-oss-120b (confirmed, agreement 1.0). Primary extraction retained.">cross-checked ✓</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">rat</span> | [Kiriyama_2024_HR](drugs/drug_captopril/pd_Kiriyama_2024_HR.md) | heart rate ← captopril · direct sigmoid Emax (Hill) effect | model (no simulator) | Kiriyama A et al., Exploring the multiple effects of nifed…, Pharmacology research & per… (2024) | [10.1002/prp2.1249](https://doi.org/10.1002/prp2.1249) |
| <span class="pk-badge pk-badge--green">reviewed — candidate</span> <span class="pk-badge pk-badge--green" title="re-read by einfracz:gpt-oss-120b (confirmed, agreement 1.0). Primary extraction retained.">cross-checked ✓</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">rat</span> | [Kiriyama_2024_QT](drugs/drug_captopril/pd_Kiriyama_2024_QT.md) | QT interval ← captopril · direct sigmoid Emax (Hill) effect | model (no simulator) | Kiriyama A et al., Exploring the multiple effects of nifed…, Pharmacology research & per… (2024) | [10.1002/prp2.1249](https://doi.org/10.1002/prp2.1249) |

## Pharmacogenomics (PGx)

| status | gene | affects | mechanism | detail | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--neutral" title="Adverse-reaction risk allele; no quantitative PK/PD parameter effect.">safety allele</span> <span class="pk-badge pk-badge--green" title="re-read by gpt-oss-120b (confirmed, agreement 1.0), gpt-oss:120b (confirmed, agreement 1.0). Primary extraction retained.">cross-checked ✓ 2/2</span> | **CYP2C9** | `safety` — adverse-reaction risk (HLA / safety allele) — no parameter shift | safety_allele | [Kubo_2017](drugs/drug_captopril/pgx_Kubo_2017_CYP2C9_safety.md) | Kubo K et al., Population differences in S-warfarin ph…, The pharmacogenomics journal (2017) | [10.1038/tpj.2016.57](https://doi.org/10.1038/tpj.2016.57) |
| <span class="pk-badge pk-badge--neutral" title="Gene–drug association without a quantitative parameter effect.">qualitative</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss-120b (?, agreement 0.25), gpt-oss:120b (?, agreement 0.25). Primary extraction retained.">cross-check: partial 0/2</span> | **VKORC1** | `Q34` · Css | target | [Kubo_2017](drugs/drug_captopril/pgx_Kubo_2017_VKORC1_Q34.md) | Kubo K et al., Population differences in S-warfarin ph…, The pharmacogenomics journal (2017) | [10.1038/tpj.2016.57](https://doi.org/10.1038/tpj.2016.57) |

<details class="pk-legend"><summary>PGx evidence and model availability</summary><table><tbody><tr><td><span class="pk-badge pk-badge--green">quantitative</span></td><td>Phenotype/genotype-specific effect on a named model parameter (θ).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">qualitative</span></td><td>Gene–drug association without a quantitative parameter effect.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">guideline estimate</span></td><td>CPIC/DPWG-derived estimate, not a primary-paper estimate.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">safety allele</span></td><td>Adverse-reaction risk allele; no quantitative PK/PD parameter effect.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>the extraction is incomplete or inconsistent.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted.</td></tr><tr><td><span class="pk-badge pk-badge--green">▶ simulatable</span></td><td>Phenotype-specific browser simulation and downloadable PGx model available.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">model only</span></td><td>PGx model available; browser simulation unavailable.</td></tr></tbody></table></details>

<details class="legend">
<summary>PGx field definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>gene</code></td><td>Associated gene; papers with multiple genes contribute multiple records.</td></tr><tr><td><code>affects</code></td><td>Target PK/PD parameter (Q-code and name); θ scales its baseline value. Q100 denotes a non-parameter association; safety denotes adverse-reaction risk. PA identifiers indicate ClinPGx/PharmGKB guideline-derived records.</td></tr><tr><td><code>mechanism</code></td><td>Metabolism, transport, target, formation, safety_allele, or unknown.</td></tr><tr><td><code>detail</code></td><td>Source-paper identifier and full-record link.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=captopril).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | blood-brain barrier | `ABCB1` inhibitor | DrugBank actor |
| absorption | kidney | `ABCB1` inhibitor | DrugBank actor |
| absorption | liver | `ABCB1` inhibitor | DrugBank actor |
| absorption | placenta | `ABCB1` inhibitor | DrugBank actor |
| absorption | small intestine | `ABCB1` inhibitor, `SLC15A1` inhibitor | DrugBank actor |
| absorption | testis | `ABCB1` inhibitor | DrugBank actor |
| distribution | blood | `ALB` other/unknown | DrugBank actor |
| metabolism | liver | `CYP2C9` safety_allele | PGx paper |
| excretion | kidney | `SLC22A6` inhibitor/substrate | DrugBank actor |

<sub>Actors without a tissue in the table: ACE (inhibitor), BDKRB1 (activator), LTA4H (inhibitor), MMP2 (inhibitor), MMP9 (inhibitor), VKORC1 (target).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

## Coverage

- **PubMed hits:** 1163 matched, 82 returned
- **screened:** 40  ·  **relevant:** 2
- **records:** 6  ·  extracted 1  ·  needs_review 4  ·  rejected 1  ·  stale 6
- **scholar-agent fallback query used:** not captured

## Full-text requests

_5 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Evans_1984.pdf` | Evans MA et al., Pharmacokinetic and pharmacodynamic mod…, European journal of clinica… (1984) | pd | 5 | [10.1007/BF00630293](https://doi.org/10.1007/BF00630293) | [6723764](https://www.ncbi.nlm.nih.gov/pubmed/6723764) | metadata signals extractable PD data (pharmacodynamicmodel) |
| `Garrett_2023.pdf` | Garrett M et al., Population modeling of bosutinib exposu…, Cancer medicine (2023) | pd | 5 | [10.1002/cam4.6439](https://doi.org/10.1002/cam4.6439) | [37553873](https://www.ncbi.nlm.nih.gov/pubmed/37553873) | metadata signals extractable PD data (exposure-response) |
| `Hsyu_2013.pdf` | Hsyu PH et al., Pharmacokinetic-pharmacodynamic relatio…, Cancer chemotherapy and pha… (2013) | pd | 5 | [10.1007/s00280-012-1998-4](https://doi.org/10.1007/s00280-012-1998-4) | [23070145](https://www.ncbi.nlm.nih.gov/pubmed/23070145) | metadata signals extractable PD data (exposure-response) |
| `Penttilä_2001.pdf` | Penttilä J et al., Pharmacokinetic-pharmacodynamic model f…, European journal of clinica… (2001) | pd | 5 | [10.1007/s002280100288](https://doi.org/10.1007/s002280100288) | [11417448](https://www.ncbi.nlm.nih.gov/pubmed/11417448) | metadata signals extractable PD data (pharmacodynamicmodel) |
| `Weinshilboum_1984.pdf` | Weinshilboum RM, Human pharmacogenetics of methyl conjug…, Federation proceedings (1984) | pgx | 5 | not captured | [6714437](https://www.ncbi.nlm.nih.gov/pubmed/6714437) | metadata signals extractable PGX data (COMT) |

<sub>queue written 2026-10-07T05:16:17.527691+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| PGx | Alexander_2024 | not_relevant | 0 | 0 | The paper investigates the effects of diet and gut microbiota on autoimmune disease (EAE/MS) and does not mention captopril or its pharmacokinetics/pharmacodynamics. |
| PGx | Brogden_1995 | not_relevant | 0 | 0 | The text consists of a list of references regarding thrombolytic therapy and unrelated drug reviews, with no mention of captopril or pharmacogenomics. |
| PGx | Cabib_1991 | not_relevant | 0 | 0 | The paper studies the effects of chronic stress and genotype on apomorphine-induced dopamine metabolism, not captopril. |
| PGx | Camici_2024 | not_relevant | 0 | 0 | The paper evaluates the clinical efficacy and safety of an HIV regimen (BIC/FTC/TAF) and does not mention captopril or any pharmacogenomic effects on its PK/PD parameters. |
| PGx | Chen_2026 | not_relevant | 0 | 0 | The paper describes a genome editing pipeline for mouse models and does not mention captopril or any pharmacokinetic/pharmacodynamic parameters. |
| PGx | Clark_2024 | not_relevant | 0 | 0 | The paper focuses on the protective effects of SARS-CoV-2 antibodies and does not mention captopril or any pharmacogenomic effects on its PK/PD parameters. |
| popPK | Dahaba_2020 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics and pharmacodynamics of propofol, not captopril. |
| popPK | Dahaba_2022 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of propofol and cisatracurium, not captopril. |
| PGx | Dangi_2023 | not_relevant | 0 | 0 | The paper investigates the immunogenicity of mRNA vaccines and the effect of pre-existing immunity on antibody responses, not the pharmacokinetics or pharmacodynamics of captopril. |
| PGx | Das_2026 | not_relevant | 0 | 0 | The paper investigates macrophage immunology in S. aureus biofilm infections and does not mention captopril or pharmacogenomics. |
| popPK | Eaton_2022 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of dabigatran in rabbits, not captopril. |
| PD | Eaton_2022 | not_relevant | 0 | 0 | The paper reports a full population PK/PD (sigmoid Emax, effect-compartment) model with numeric PD parameters, but for dabigatran, not captopril, so it provides no captopril exposure-response relationship. |
| popPK | Evans_1984 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of pancuronium, not captopril. |
| PD | Evans_1984 | not_relevant | 0 | 0 | The paper reports a PK/PD model with numeric EC50 parameters, but for pancuronium, not captopril, so no captopril PD relationship is present. |
| popPK | Figueiredo_2020 | irrelevant | 0 | 0 | The paper is a clinical trial regarding therapy for cerebral palsy and contains no pharmacokinetic data for captopril. |
| PGx | Gallichotte_2022 | not_relevant | 0 | 0 | The paper discusses dengue virus vaccines and antibody responses, which is unrelated to captopril pharmacogenomics. |
| popPK | Garrett_2023 | irrelevant | 0 | 0 | no_text gate: only 122 chars of text extracted (&lt; 400) |
| PD | Garrett_2023 | not_relevant | 0 | 0 | The paper models exposure-response for bosutinib in CML, not captopril, so no captopril PD relationship or parameters are reported. |
| popPK | Han_2025 | irrelevant | 0 | 0 | The study evaluates quality of life outcomes in chronic pancreatitis patients and does not involve captopril or pharmacokinetic modeling. |
| PGx | Hoch_2026 | not_relevant | 0 | 0 | The paper studies the pharmacokinetics of asciminib, not captopril, and focuses on drug-drug interactions rather than pharmacogenomics. |
| popPK | Hsyu_2013 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics and pharmacodynamics of bosutinib, not captopril. |
| PD | Hsyu_2013 | not_relevant | 0 | 0 | The paper reports exposure-response analyses for bosutinib, not captopril, so no captopril PD relationship or parameters are present. |
| popPK | Hu_2025 | irrelevant | 0 | 0 | The paper is a systematic review of voriconazole pharmacokinetics, not captopril. |
| PGx | Hu_2025 | not_relevant | 0 | 0 | The paper focuses on voriconazole, not captopril. |
| PGx | Jamaluddin_2026 | not_relevant | 0 | 0 | The paper investigates MRAP2 and GPCR signaling in the context of obesity variants, with no mention of captopril or its pharmacokinetic/pharmacodynamic parameters. |
| popPK | Killerby_2022 | irrelevant | 0 | 0 | The paper is a meta-analysis on hay preservation and contains no pharmacokinetic data for captopril. |
| PGx | Kubo_2017 | not_relevant | 0 | 0 | The paper reports pharmacogenomic effects on warfarin pharmacokinetics, not captopril. |
| PGx | Kurata_2022 | not_relevant | 0 | 0 | The paper investigates the effect of liver cirrhosis on theophylline pharmacokinetics, not captopril. |
| PGx | Lee_2013 | not_relevant | 0 | 0 | The paper focuses on photochemical NADPH regeneration for P450 BM3 in a synthetic context and does not mention captopril or human pharmacogenomics. |
| PGx | Lee_2025 | not_relevant | 0 | 0 | The paper investigates CYP2B6 regulation in glioblastoma cells and does not report pharmacokinetic or pharmacodynamic parameters for captopril. |
| popPK | Li_2022 | irrelevant | 0 | 0 | The study investigates the toxicity of cyclophosphamide in zebrafish and does not involve captopril or its pharmacokinetics. |
| PD | Li_2022 | not_relevant | 0 | 0 | The paper concerns cyclophosphamide toxicity in zebrafish, not captopril; no captopril exposure-response data or PD parameters are present. |
| PGx | Liberti_2016 | not_relevant | 0 | 0 | The paper analyzes HCV viral genotypes for simeprevir resistance, not human pharmacogenomics for captopril. |
| PGx | Lieberman_2001 | not_relevant | 0 | 0 | The paper discusses prostate cancer chemoprevention trial design and does not mention captopril or its pharmacokinetics/pharmacodynamics. |
| PGx | Lundström_1989 | not_relevant | 0 | 0 | The paper studies the effect of halothane genotype on muscle metabolism and meat quality in pigs, not the pharmacokinetics or pharmacodynamics of captopril. |
| PGx | Manjón_2023 | not_relevant | 0 | 0 | The paper discusses 3D genome organization and Taxol resistance in cancer cells, unrelated to captopril pharmacogenomics. |
| PGx | Marette_1993 | not_relevant | 0 | 0 | The paper studies glucose transport in brown adipocytes of diabetic rats and does not mention captopril or its pharmacokinetics/pharmacodynamics. |
| PGx | Merz_2024 | not_relevant | 0 | 0 | The paper focuses on ONECUT1 gene variants and their role in pancreatic development and diabetes, with no mention of captopril or its pharmacokinetic/pharmacodynamic parameters. |
| PGx | Nademanee_1995 | not_relevant | 0 | 0 | The paper focuses on bone marrow transplantation outcomes and HLA matching, with no mention of captopril or its pharmacokinetics/pharmacodynamics. |
| PGx | Nagai_2015 | not_relevant | 0 | 0 | The paper investigates the pharmacogenomics of warfarin, not captopril. |
| PGx | Ohara_2014 | not_relevant | 0 | 0 | The paper investigates pharmacogenomic effects on warfarin, not captopril. |
| PGx | Omar_2022 | not_relevant | 0 | 0 | The paper investigates protein kinase A mutations in Cushing's syndrome and does not mention captopril or its pharmacokinetics/pharmacodynamics. |
| PGx | Ozbey_2024 | not_relevant | 0 | 0 | The paper focuses on midazolam and liver cirrhosis, not captopril. |
| PGx | Patange_2025 | not_relevant | 0 | 0 | The paper studies C. elegans genetics and microbial interactions, not the pharmacokinetics or pharmacodynamics of captopril. |
| popPK | Patcas_2022 | irrelevant | 0 | 0 | The paper analyzes craniofacial growth curves using cephalometric data and does not involve captopril or pharmacokinetics. |
| popPK | Penttilä_2001 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics and pharmacodynamics of glycopyrrolate, not captopril. |
| PD | Penttilä_2001 | not_relevant | 0 | 0 | The paper models glycopyrrolate's anticholinergic effect (EC50, gamma, t1/2ke0), not captopril, so no captopril PD relationship is reported. |
| PGx | Pesti_1994 | not_relevant | 0 | 0 | The paper studies amino acid metabolism in chickens and does not involve the drug captopril. |
| PGx | Potzel_2026 | not_relevant | 0 | 0 | The paper investigates OATP1B1 activity using coproporphyrins as a biomarker and does not report pharmacokinetic or pharmacodynamic parameters for captopril. |
| PGx | Prahl_2023 | not_relevant | 0 | 0 | The paper studies urea and uric acid transporters in dairy cows and does not mention captopril or any pharmacokinetic/pharmacodynamic parameters of the drug. |
| PGx | Price_1989 | not_relevant | 2 | 0 | The paper reports the genetic inheritance of erythrocyte thiol methyltransferase (TMT) activity but does not measure or report changes in captopril pharmacokinetic or pharmacodynamic parameters. |
| PGx | Pukhalsky_1990 | not_relevant | 0 | 0 | The paper studies cyclophosphamide in mice, not captopril. |
| PGx | Ramirez-Valdez_2023 | not_relevant | 0 | 0 | The paper focuses on cancer immunotherapy and vaccine mechanisms, with no mention of captopril or pharmacogenomics. |
| PGx | Robey_2024 | not_relevant | 0 | 0 | The paper focuses on resistance to HDAC inhibitors (romidepsin) via METTL7A/B methylation; captopril is only mentioned as a known substrate for METTL7B, not as the subject of a pharmacogenomic PK/PD study. |
| PGx | Rodrigues_2011 | not_relevant | 0 | 0 | The paper investigates the molecular mechanisms of mycobacteria-induced anaemia and iron metabolism, with no mention of captopril or its pharmacokinetics/pharmacodynamics. |
| PGx | Rother_2023 | not_relevant | 0 | 0 | The paper investigates the role of acid ceramidase in innate immune memory and does not mention captopril or its pharmacokinetics/pharmacodynamics. |
| PGx | Russell_1991 | not_relevant | 0 | 0 | The paper studies catecholamine metabolism in a rat strain and does not mention captopril or its pharmacokinetics/pharmacodynamics. |
| PGx | Shulkes_1987 | not_relevant | 0 | 0 | The paper studies the effect of captopril on neurotensin metabolism, not the effect of a gene variant on captopril's pharmacokinetics or pharmacodynamics. |
| PGx | Siddoway_1987 | not_relevant | 0 | 0 | The paper studies the pharmacogenomics of propafenone, not captopril. |
| popPK | Singh_2023 | irrelevant | 0 | 0 | The paper characterizes the pharmacology of the endocannabinoid sensor GRABeCB2.0 in HEK293 cells and does not involve captopril or its pharmacokinetics. |
| PD | Singh_2023 | not_relevant | 0 | 0 | The paper characterizes the endocannabinoid sensor GRABeCB2.0 (EC50/IC50 for eCBs, THC, CBD) and contains no captopril data whatsoever. |
| popPK | Singh_2024 | irrelevant | 0 | 0 | The paper characterizes a genetically encoded sensor for endocannabinoids and does not involve captopril or its pharmacokinetics. |
| PD | Singh_2024 | not_relevant | 0 | 0 | The paper characterizes EC50/IC50 values of endocannabinoids and cannabinoids at the GRABeCB2.0 fluorescent sensor in vitro; captopril is not studied and no drug exposure-response or PK/PD relationship is reported. |
| PGx | Sulbarán_1994 | not_relevant | 0 | 0 | The study evaluates the clinical efficacy of captopril in hypertensive crises and correlates it with clinical variables (BMI, age, initial BP), but it does not report any pharmacogenomic effects (gene variants/genotypes) on PK or PD parameters. |
| PGx | Sun_2026 | not_relevant | 0 | 0 | The paper investigates oral microbiota markers for predicting SARS-CoV-2 severity and does not mention captopril or pharmacogenomics. |
| PGx | Tan_2025 | not_relevant | 0 | 0 | The paper discusses cadmium accumulation in rice and is unrelated to captopril pharmacogenomics. |
| PGx | Timm_2005 | not_relevant | 0 | 0 | The paper reports pharmacogenomic effects on cyclophosphamide, not captopril. |
| PGx | Toni_2024 | not_relevant | 0 | 0 | The paper is a scoping review of adverse drug reactions in children with congenital heart disease and does not report pharmacogenomic effects on captopril PK/PD. |
| PGx | Tran_2025 | not_relevant | 0 | 0 | The paper focuses on genetic associations with chronic kidney disease phenotypes and does not mention captopril or its pharmacokinetics/pharmacodynamics. |
| PGx | Wang_2025 | not_relevant | 0 | 0 | The paper focuses on cisplatin delivery in lung cancer and does not mention captopril or any pharmacogenomic effects on its PK/PD parameters. |
| PGx | Weagley_2022 | not_relevant | 0 | 0 | The paper investigates gut microbial NAD metabolism and malnutrition, with no mention of captopril or pharmacogenomics. |
| PGx | Weinshilboum_1984 | not_relevant | 2 | 0 | The paper mentions captopril only as a substrate for TMT to illustrate the enzyme's function, but it does not report any pharmacokinetic or pharmacodynamic parameters of captopril or any genetic variants affecting them. |
| PGx | Woodside_1984 | not_relevant | 0 | 0 | The study investigates the pharmacodynamic interaction between captopril and sodium nitroprusside in a general patient population, with no mention of genetic variants or pharmacogenomic analysis. |
| PGx | Work_2024 | not_relevant | 0 | 0 | The paper investigates CYP3A inhibitor selectivity in vitro and does not report pharmacogenomic effects on captopril PK/PD. |
| PGx | Xu_2023 | not_relevant | 0 | 0 | The paper investigates autophagy and inflammation in mice and does not mention captopril or any pharmacokinetic/pharmacodynamic parameters of the drug. |
| PGx | Yamada_1992 | not_relevant | 0 | 0 | The paper discusses a ceruloplasmin gene polymorphism in rats and its association with copper metabolism, with no mention of captopril or its pharmacokinetic/pharmacodynamic parameters. |
| PGx | Yao_2010 | not_relevant | 0 | 0 | The paper investigates pharmacogenomics of cyclophosphamide, not captopril. |
| PGx | Yeo_2025 | not_relevant | 0 | 0 | The paper investigates pharmacogenomic effects on antiemetic efficacy (CINV control) for drugs like aprepitant and ondansetron, not captopril. |
| PGx | Zhang_2026 | not_relevant | 0 | 0 | The paper investigates lipid metabolism in horses and is unrelated to captopril pharmacokinetics or pharmacodynamics. |
| popPK | Zhou_2024 | irrelevant | 0 | 0 | The paper describes an antiviral drug (NZ-804) for SARS-CoV-2 and does not involve captopril or its pharmacokinetics. |
| PD | Zhou_2024 | not_relevant | 0 | 0 | The paper concerns NZ-804 (a SARS-CoV-2 Mpro inhibitor), not captopril, and contains no captopril exposure- or dose-response PD analysis or parameters. |
| popPK | Zhou_2025 | irrelevant | 0 | 0 | The study investigates glymphatic system changes in breast cancer patients using MRI and does not involve captopril or pharmacokinetic parameters. |
| PGx | Zhou_2025_2 | not_relevant | 0 | 0 | The paper investigates pharmacogenomics for imatinib, not captopril. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-07 05:16 UTC</sub>
