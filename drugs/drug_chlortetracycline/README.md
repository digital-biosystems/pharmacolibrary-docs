<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;A01A&quot;,&quot;href&quot;:&quot;atc/A01A.md&quot;},{&quot;label&quot;:&quot;chlortetracycline&quot;}]"></div>

# chlortetracycline

- **generic name:** chlortetracycline
- **ATC codes:** `A01AB21`, `D06AA02`, `J01AA03`, `S01AA02`
- **DrugBank:** [DB09093](https://go.drugbank.com/drugs/DB09093) · **PubChem:** [CID 54708735](https://pubchem.ncbi.nlm.nih.gov/compound/54708735)
- **molar mass:** 478.88 g/mol (C22H23ClN2O8) — DrugBank
- **groups:** approved, vet_approved, withdrawn

## About

Chlortetracycline is a tetracycline antibiotic used to treat bacterial infections, with preparations for oral, skin, eye, and systemic use. It has been withdrawn from human use in some places but remains approved in veterinary medicine.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q417948](https://www.wikidata.org/wiki/Q417948) and the WHO ATC classification; not checked by a person.</small>

## Molecules and molar masses

> The molar mass each model uses to convert mass to molar concentration and to form a metabolite molecule for molecule. Looked up, never estimated: DrugBank for the drug, the paper's own value or the PubChem entry matched to the paper's name for a metabolite.

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| chlortetracycline | parent | 478.88 | C22H23ClN2O8 | DrugBank | [54708735](https://pubchem.ncbi.nlm.nih.gov/compound/54708735) | Reinbold_2010 |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-04 00:06 | 5:38 | 0/0/1 | 0/0/0 | 0/0/0 | 115,604/11,749 | ollama / qwen3.8:27b-mtp-q8_0 | 7 | 4/3 | 5/2 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.118). The first reading is what the record holds.">cross-check: disputed</span> <span class="pk-badge pk-badge--species" title="Animal study (cattle), not measured in people (from an LLM reading of the title and abstract by gpt-6-luna, p(non-human) 1.00).">cattle</span><br><sub>STALE — current validate: needs_review</sub><br><sub>blocking: C5 dimensioned parameter(s) without a unit: Q189, Q174 — no SI value to build f…</sub><br><sub>route_to: `human_review`</sub> | [Reinbold_2010_reference](drugs/drug_chlortetracycline/Chlortetracycline_Reinbold2010_reference.md) | — | 1-compartment (no model) | 7 | Reinbold JB et al., Plasma pharmacokinetics of oral chlorte…, Journal of veterinary pharm… (2010) | [10.1111/j.1365-2885.2009.1116.x](https://doi.org/10.1111/j.1365-2885.2009.1116.x) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=chlortetracycline) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| distribution | blood | `ALB` unknown | DrugBank actor |
| excretion | bile duct | <sub>named in DrugBank's ADME text</sub> | prose |

<sub>Actors without a tissue in the table: ARF1 (inhibitor), EPHB1 (inhibitor), PADI4 (inhibitor), PNLIP (inhibitor).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 24 matched, 20 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 1  ·  extracted 0  ·  needs_review 1  ·  rejected 0  ·  stale 1
- **scholar-agent fallback query used:** not captured

## Full text wanted

_9 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Bradley_1982.pdf` | Bradley BD et al., Comparative pharmacokinetics of chlorte…, Journal of veterinary pharm… (1982) | popPK | 10 | [10.1111/j.1365-2885.1982.tb00442.x](https://doi.org/10.1111/j.1365-2885.1982.tb00442.x) | [7183795](https://pubmed.ncbi.nlm.nih.gov/7183795) | The study reports quantitative pharmacokinetic parameters for chlortetracycline in calves, but the specific numeric values are not present in the provided evidence text. |
| `Reinbold_2010.pdf` | Reinbold JB et al., Plasma pharmacokinetics of oral chlorte…, Journal of veterinary pharm… (2010) | popPK | 10 | [10.1111/j.1365-2885.2009.1116.x](https://doi.org/10.1111/j.1365-2885.2009.1116.x) | [20444029](https://pubmed.ncbi.nlm.nih.gov/20444029) | The abstract explicitly reports quantitative population PK parameters (V/F, Cl/F, k, t1/2) for chlortetracycline in cattle. |
| `Reppert_2020.pdf` | Reppert EJ et al., Determination of plasma-chlortetracycli…, Translational animal science (2020) | popPK | 8 | [10.1093/tas/txaa048](https://doi.org/10.1093/tas/txaa048) | [32705045](https://pubmed.ncbi.nlm.nih.gov/32705045) | The study reports population pharmacokinetic trends and concentration data for chlortetracycline in cattle, but specific numeric parameter values (CL, V, etc.) are not explicitly listed in the provided text. |
| `Zhang_2022.pdf` | Zhang Y et al., Florfenicol/Chlortetracycline Effect on…, Microbial drug resistance (… (2022) | popPK | 8 | [10.1089/mdr.2022.0008](https://doi.org/10.1089/mdr.2022.0008) | [35723674](https://pubmed.ncbi.nlm.nih.gov/35723674) | The study reports population PK models and AUC for chlortetracycline in ducks, but specific clearance, volume, or half-life values are not explicitly listed in the provided text. |
| `Ding_2026.pdf` | Ding M et al., Biodegradation of tetracycline by Penic…, Bioprocess and biosystems e… (2026) | pd | 4 | [10.1007/s00449-026-03360-4](https://doi.org/10.1007/s00449-026-03360-4) | [42274796](https://www.ncbi.nlm.nih.gov/pubmed/42274796) | metadata signals extractable PD data (EC50) |
| `Halling-Sørensen_2000.pdf` | Halling-Sørensen B, Algal toxicity of antibacterial agents…, Chemosphere (2000) | pd | 4 | [10.1016/s0045-6535(99)00445-2](https://doi.org/10.1016/s0045-6535(99)00445-2) | [10705551](https://www.ncbi.nlm.nih.gov/pubmed/10705551) | metadata signals extractable PD data (EC50) |
| `Halling-Sørensen_2001.pdf` | Halling-Sørensen B, Inhibition of aerobic growth and nitrif…, Archives of environmental c… (2001) | pd | 4 | [10.1007/s002440010197](https://doi.org/10.1007/s002440010197) | [11525487](https://www.ncbi.nlm.nih.gov/pubmed/11525487) | metadata signals extractable PD data (EC50) |
| `Magdaleno_2017.pdf` | Magdaleno A et al., Toxicity and Genotoxicity of Three Anti…, Bulletin of environmental c… (2017) | pd | 4 | [10.1007/s00128-017-2091-9](https://doi.org/10.1007/s00128-017-2091-9) | [28434066](https://www.ncbi.nlm.nih.gov/pubmed/28434066) | metadata signals extractable PD data (EC50) |
| `Narciso_2023.pdf` | Narciso A et al., Application of the Aliivibrio fischeri…, FEMS microbiology ecology (2023) | pd | 4 | [10.1093/femsec/fiad125](https://doi.org/10.1093/femsec/fiad125) | [37822015](https://www.ncbi.nlm.nih.gov/pubmed/37822015) | metadata signals extractable PD data (EC50) |

<sub>queue written 2026-10-04T00:02:04.030154+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Bradley_1982 | relevant | 10 | 0 | The study reports quantitative pharmacokinetic parameters for chlortetracycline in calves, but the specific numeric values are not present in the provided evidence text. |
| popPK | Brosche_2010 | irrelevant | 0 | 0 | The study is an ecotoxicology investigation measuring toxicity (EC50) in bacterial communities, not a pharmacokinetic study reporting disposition parameters. |
| popPK | Cazer_2017 | relevant | 8 | 2 | The paper uses a compartmental PK model for chlortetracycline in cattle, but the specific numeric parameter values are in Table 2 (not provided) or cited from other sources, with only fragmentary values in the extracted lines. |
| popPK | Cazer_2018 | irrelevant | 0 | 0 | The paper is a corrigendum regarding a Monte Carlo simulation of antimicrobial resistance dissemination, not a pharmacokinetic study, and contains no PK parameters for chlortetracycline. |
| popPK | Curtis_2020 | irrelevant | 0 | 0 | The study is a vaccine efficacy trial for bovine anaplasmosis in cattle, and chlortetracycline is only mentioned as a background control method, with no pharmacokinetic parameters reported. |
| popPK | Ding_2026 | irrelevant | 0 | 0 | no_text gate: only 101 chars of text extracted (&lt; 400) |
| PD | Ding_2026 | not_relevant | 0 | 0 | The paper focuses on the biodegradation of tetracycline by a fungus, not the pharmacodynamics of chlortetracycline in a biological host. |
| popPK | Halling-Sørensen_2000 | irrelevant | 0 | 0 | no_text gate: only 64 chars of text extracted (&lt; 400) |
| PD | Halling-Sørensen_2000 | not_relevant | 0 | 0 | The provided text is only the title of a paper and does not contain the full text, data, or numeric PD parameters required to assess the exposure-response relationship for chlortetracycline. |
| popPK | Halling-Sørensen_2001 | irrelevant | 0 | 0 | no_text gate: only 99 chars of text extracted (&lt; 400) |
| PD | Halling-Sørensen_2001 | not_relevant | 0 | 0 | The paper focuses on the inhibition of aerobic growth and nitrification in sewage sludge by antibacterial agents, likely in an environmental context, and does not report pharmacodynamic (PD) or exposure-response relationships for chlortetracycline in a biological or clinical system with numeric PD parameters. |
| popPK | Lin_2012 | irrelevant | 0 | 0 | The study is a toxicological assessment of earthworms measuring reproductive and biochemical endpoints, not a pharmacokinetic study reporting disposition parameters. |
| popPK | Magdaleno_2017 | irrelevant | 0 | 0 | no_text gate: only 86 chars of text extracted (&lt; 400) |
| PD | Magdaleno_2017 | not_relevant | 0 | 0 | The paper focuses on toxicity and genotoxicity assays (e.g., Ames test, micronucleus) rather than pharmacodynamic exposure-response modeling or dose-effect curve fitting for chlortetracycline. |
| popPK | Narciso_2023 | irrelevant | 0 | 0 | no_text gate: only 124 chars of text extracted (&lt; 400) |
| PD | Narciso_2023 | not_relevant | 0 | 0 | The paper focuses on the application of a bioassay for assessing antibiotic and copper effects, but does not report specific pharmacodynamic (PD) or exposure-response parameters for chlortetracycline. |
| popPK | Reppert_2020 | relevant | 8 | 2 | The study reports population pharmacokinetic trends and concentration data for chlortetracycline in cattle, but specific numeric parameter values (CL, V, etc.) are not explicitly listed in the provided text. |
| popPK | Thompson_1985 | irrelevant | 0 | 0 | The study uses chlortetracycline as a fluorescent probe to measure calcium mobilization in platelets, not as a subject drug for pharmacokinetic analysis. |
| PD | Thompson_1985 | not_relevant | 0 | 0 | The paper studies intracellular calcium fluxes in platelets and mentions chlortetracycline only as a reagent/material, without reporting any pharmacodynamic or exposure-response analysis for it. |
| popPK | Toillion_2024 | irrelevant | 4 | 2 | The study reports non-compartmental AUC values for chlortetracycline in cattle but lacks the specific quantitative disposition parameters (CL, V, ka, half-life) required for population-PK extraction. |
| PGx | Tymoszewska_2021 | not_relevant | 0 | 0 | The paper studies bacterial resistance mechanisms in Lactococcus lactis, not human pharmacogenomics or the PK/PD of chlortetracycline in patients. |
| popPK | Volkova_2017 | irrelevant | 2 | 0 | The paper is a modeling framework for intestinal drug concentrations in cattle, not a study reporting standard systemic PK parameters (CL, V, ka) for chlortetracycline; it references external data for central circulation parameters but does not provide the numeric values in the text. |
| popPK | Wei_2018 | irrelevant | 0 | 0 | The paper is an ISO standard for water toxicity testing using luminescent bacteria and does not contain any pharmacokinetic data for chlortetracycline. |
| PD | Wei_2018 | not_relevant | 0 | 0 | The provided text consists of PDF disclaimers and generic methodological notes regarding reagents and figure captions, containing no data, analysis, or parameters related to chlortetracycline pharmacodynamics. |
| popPK | Zhang_2022 | relevant | 8 | 2 | The study reports population PK models and AUC for chlortetracycline in ducks, but specific clearance, volume, or half-life values are not explicitly listed in the provided text. |
| popPK | Zhou_2021 | irrelevant | 0 | 0 | The study investigates the toxicological effects and biodegradation of chlortetracycline by microalgae (Spirulina platensis), not its pharmacokinetic disposition parameters. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-04 00:02 UTC</sub>
