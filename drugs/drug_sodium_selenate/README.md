<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;A12C&quot;,&quot;href&quot;:&quot;atc/A12C.md&quot;},{&quot;label&quot;:&quot;sodium selenate&quot;}]"></div>

# sodium selenate

- **generic name:** sodium selenate
- **ATC codes:** `A12CE01`
- **DrugBank:** [DB11068](https://go.drugbank.com/drugs/DB11068) · **PubChem:** [CID 1089](https://pubchem.ncbi.nlm.nih.gov/compound/1089)
- **molar mass:** 144.97 g/mol (H2O4Se) — DrugBank
- **groups:** approved

## About

Sodium selenate is a selenium supplement used to supply the essential mineral selenium. It is an approved mineral supplement, used as a source of selenium in supplements.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q419488](https://www.wikidata.org/wiki/Q419488) and the WHO ATC classification; not checked by a person.</small>

## popPK records

_not available_

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--species" title="Animal study (sheep), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">sheep</span> | [Proietti_2018_Ca2_c](drugs/drug_sodium_selenate/pd_Proietti_2018_Ca2_c.md) | intracellular [Ca2+]C ← sodium selenate · direct Emax (saturable) effect | — | Proietti P et al., Selenium maintains Ca2+ homeostasis in…, PloS one (2018) | [10.1371/journal.pone.0201523](https://doi.org/10.1371/journal.pone.0201523) |
| <span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--species" title="Animal study (sheep), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">sheep</span> | [Proietti_2018_Ca2_entry](drugs/drug_sodium_selenate/pd_Proietti_2018_Ca2_entry.md) | Ca2+ entry ← sodium selenate · direct Emax (saturable) effect | — | Proietti P et al., Selenium maintains Ca2+ homeostasis in…, PloS one (2018) | [10.1371/journal.pone.0201523](https://doi.org/10.1371/journal.pone.0201523) |

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-05 09:48 | 1:02 | 0/0/0 | 1/0/0 | 0/0/0 | 24,896/1,287 | ollama / qwen3.8:27b-mtp-q8_0 | 2 | 0/5 | 2/0 | 0 |

## Coverage

- **PubMed hits:** 21 matched, 20 returned
- **screened:** 1  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full-text requests

_2 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `DeYoung_1991.pdf` | DeYoung DJ et al., Assessment of the developmental toxicit…, Drug and chemical toxicology (1991) | pd | 4 | [10.3109/01480549109017872](https://doi.org/10.3109/01480549109017872) | [1889372](https://www.ncbi.nlm.nih.gov/pubmed/1889372) | metadata signals extractable PD data (EC50) |
| `Kuperman_2018.pdf` | Kuperman RG et al., Selenium toxicity to survival and repro…, Environmental toxicology an… (2018) | pd | 4 | [10.1002/etc.4017](https://doi.org/10.1002/etc.4017) | [29078251](https://www.ncbi.nlm.nih.gov/pubmed/29078251) | metadata signals extractable PD data (EC50) |

<sub>queue written 2026-10-05 09:48 UTC</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| PGx | Cabral_2020 | not_relevant | 0 | 0 | The paper studies the physiological response of rice plants to selenium toxicity, not the pharmacogenomics of sodium selenate in humans. |
| popPK | Cacciatore_2024 | irrelevant | 0 | 0 | The paper investigates the epigenetic role of MAT2A in prostate cancer and does not involve sodium selenate or pharmacokinetic modeling. |
| PD | Cacciatore_2024 | not_relevant | 0 | 0 | The paper investigates MAT2A inhibitors (PF-9366, AG-270) in prostate cancer models and does not mention sodium selenate or report any pharmacodynamic parameters for it. |
| PGx | Cipriano_2023 | not_relevant | 0 | 0 | The paper studies the agronomic effects of selenium compounds on sorghum genotypes, not the pharmacogenomics of sodium selenate in humans. |
| popPK | Dausch_1993 | irrelevant | 0 | 0 | The study measures hepatic S-adenosylmethionine levels in rats fed selenium compounds and does not report any pharmacokinetic parameters for sodium selenate. |
| PD | Dausch_1993 | not_relevant | 1 | 0 | The paper explicitly states that no dose-response relationship was found and only reports qualitative significant differences without providing numeric PD parameters or curves. |
| popPK | DeYoung_1991 | irrelevant | 0 | 0 | no_text gate: only 133 chars of text extracted (&lt; 400) |
| PD | DeYoung_1991 | not_relevant | 3 | 0 | The paper reports a Teratogenic Index (LC50/EC50) for sodium selenate but does not provide the specific numeric values for LC50 or EC50, nor does it present a concentration-effect curve or detailed PK/PD modeling. |
| popPK | Gür_2004 | irrelevant | 0 | 0 | The study is an in-vitro pharmacological investigation of cardiac responses in diabetic rats, not a pharmacokinetic study, and reports no disposition parameters for sodium selenate. |
| PD | Gür_2004 | not_relevant | 1 | 0 | The paper reports qualitative changes in cardiac responses to agonists (isoproterenol, adenosine, carbachol) in diabetic rats treated with sodium selenate, but it does not provide numeric concentration-effect curves, dose-response parameters (Emax, EC50), or exposure-response data for sodium selenate itself. |
| PGx | Hasan_2021 | not_relevant | 0 | 0 | The paper studies plant physiology and selenium toxicity in wheat, not human pharmacogenomics or drug PK/PD. |
| PGx | Jain_2018 | not_relevant | 0 | 0 | The paper studies fungal genetics and toxicity in Aspergillus fumigatus, not human pharmacogenomics or PK/PD parameters of sodium selenate as a drug. |
| popPK | Jayachandran_2021 | irrelevant | 0 | 0 | The study reports pharmacokinetic parameters for sodium selenite, not sodium selenate, which is a different chemical compound. |
| PD | Jayachandran_2021 | not_relevant | 0 | 0 | The paper reports a population pharmacokinetic (PK) model and dose-bioavailability relationship, but it does not model or report any pharmacodynamic (PD) or exposure-response parameters (e.g., Emax, EC50) for the drug's effect. |
| popPK | Jourdain_2026 | irrelevant | 0 | 0 | The study focuses on leucettamine B and nacryline derivatives for bone healing and does not involve sodium selenate. |
| PD | Jourdain_2026 | not_relevant | 0 | 0 | The paper studies leucettamine B and nacryline derivatives, not sodium selenate, and reports only single-dose screening data without dose-response curves or PD parameters. |
| popPK | Knox_2019 | irrelevant | 1 | 0 | The study investigates sodium selenite, not sodium selenate, and only reports a half-life without a compartmental model or volume of distribution. |
| PD | Knox_2019 | not_relevant | 1 | 0 | The paper reports PK parameters (half-life) and qualitative efficacy/toxicity observations but does not provide a concentration-effect or dose-response model with numeric PD parameters (e.g., Emax, EC50). |
| popPK | Kuperman_2018 | irrelevant | 0 | 0 | no_text gate: only 98 chars of text extracted (&lt; 400) |
| popPK | Li_2024 | irrelevant | 0 | 0 | no_text gate: only 127 chars of text extracted (&lt; 400) |
| PGx | Moses_2022 | not_relevant | 0 | 0 | The paper investigates perivascular spaces as a biomarker for disease severity in bvFTD patients treated with sodium selenate, but it does not report any pharmacogenomic effects on the drug's pharmacokinetic or pharmacodynamic parameters. |
| popPK | Preitner_2026 | irrelevant | 0 | 0 | The paper studies the pharmacodynamics of ACI-16664 in tauopathy mice and does not involve sodium selenate. |
| PD | Preitner_2026 | not_relevant | 0 | 0 | The paper discusses the drug ACI-16664, not sodium selenate, and does not report any pharmacodynamic or exposure-response parameters. |
| popPK | Proietti_2018 | irrelevant | 0 | 0 | The study investigates the mechanistic effect of sodium selenate on calcium homeostasis in sheep lymphomonocytes (in vitro/ex vivo) and does not report pharmacokinetic parameters such as clearance, volume of distribution, or half-life. |
| popPK | Tsukamoto_2013 | irrelevant | 0 | 0 | The paper is an in-vitro mechanistic study on cell signaling and EMT, reporting no pharmacokinetic parameters for sodium selenate. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this page](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bsodium_selenate%5D&body=Drug%3A%20sodium_selenate%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_sodium_selenate/%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary v26.09</sub>
