<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;D08A&quot;,&quot;href&quot;:&quot;atc/D08A.md&quot;},{&quot;label&quot;:&quot;benzethonium chloride&quot;}]"></div>

# benzethonium chloride

- **generic name:** benzethonium chloride
- **ATC codes:** `D08AJ08`
- **DrugBank:** not captured · **PubChem:** not captured
- **groups:** not captured

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-09-29 18:01 | 1:24 | 0/0/0 | 1/1/0 | 0/0/0 | 1,528/114 | ollama / qwen3.8:27b-mtp-q8_0 | 3 | 4/2 | 3/0 | 0 |

## popPK records

_not available_

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> | [Nomura_2010_fraction](drugs/drug_benzethonium_chloride/pd_Nomura_2010_fraction.md) | apoptosis ← benzethonium chloride / benzalkonium chloride / povidone iodine · inhibition effect | — | Nomura Y et al., Effects of high-dose major components i…, Dental materials journal (2010) | [10.4012/dmj.2009-031](https://doi.org/10.4012/dmj.2009-031) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Nomura_2010_mM](drugs/drug_benzethonium_chloride/pd_Nomura_2010_mM.md) | cell viability ← benzethonium chloride / benzalkonium chloride / povidone iodine · inhibition effect | — | Nomura Y et al., Effects of high-dose major components i…, Dental materials journal (2010) | [10.4012/dmj.2009-031](https://doi.org/10.4012/dmj.2009-031) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from keyword rules on the title and abstract — no LLM answer yet).">in vitro</span> | [Gough_2017_beam_breaks_per_hour](drugs/drug_benzethonium_chloride/pd_Gough_2017_beam_breaks_per_hour.md) | locomotor activity ← myosuppressin (and benzethonium chloride) · direct Emax (saturable) effect | — | Gough CS et al., Peptidergic control in a fruit crop pes…, PloS one (2017) | [10.1371/journal.pone.0188021](https://doi.org/10.1371/journal.pone.0188021) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from keyword rules on the title and abstract — no LLM answer yet).">in vitro</span> | [Gough_2017_crop_contraction_rate](drugs/drug_benzethonium_chloride/pd_Gough_2017_crop_contraction_rate.md) | crop contraction rate ← myosuppressin (and benzethonium chloride) · direct Emax (saturable) effect | — | Gough CS et al., Peptidergic control in a fruit crop pes…, PloS one (2017) | [10.1371/journal.pone.0188021](https://doi.org/10.1371/journal.pone.0188021) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from keyword rules on the title and abstract — no LLM answer yet).">in vitro</span> | [Gough_2017_midgut_contraction_rate](drugs/drug_benzethonium_chloride/pd_Gough_2017_midgut_contraction_rate.md) | midgut contraction rate ← myosuppressin (and benzethonium chloride) · direct Emax (saturable) effect | — | Gough CS et al., Peptidergic control in a fruit crop pes…, PloS one (2017) | [10.1371/journal.pone.0188021](https://doi.org/10.1371/journal.pone.0188021) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from keyword rules on the title and abstract — no LLM answer yet).">in vitro</span> | [Gough_2017_sucrose_food_dye_uptake](drugs/drug_benzethonium_chloride/pd_Gough_2017_sucrose_food_dye_uptake.md) | sucrose/food dye uptake ← myosuppressin (and benzethonium chloride) · direct Emax (saturable) effect | — | Gough CS et al., Peptidergic control in a fruit crop pes…, PloS one (2017) | [10.1371/journal.pone.0188021](https://doi.org/10.1371/journal.pone.0188021) |

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 32 matched, 30 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full text wanted

_7 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Durieux_1997.pdf` | Durieux ME et al., Synergistic inhibition of muscarinic si…, Anesthesiology (1997) | pd | 5 | [10.1097/00000542-199706000-00014](https://doi.org/10.1097/00000542-199706000-00014) | [9197302](https://www.ncbi.nlm.nih.gov/pubmed/9197302) | metadata signals extractable PD data (IC50) |
| `LeBouf_2017.pdf` | LeBouf RF et al., Air and Surface Sampling Method for Ass…, Annals of work exposures an… (2017) | pd | 5 | [10.1093/annweh/wxx037](https://doi.org/10.1093/annweh/wxx037) | [28927165](https://www.ncbi.nlm.nih.gov/pubmed/28927165) | metadata signals extractable PD data (exposure-response) |
| `Brown_2023.pdf` | Brown KA et al., Ketamine preservative benzethonium chlo…, Neuropharmacology (2023) | pd | 4 | [10.1016/j.neuropharm.2022.109403](https://doi.org/10.1016/j.neuropharm.2022.109403) | [36565852](https://www.ncbi.nlm.nih.gov/pubmed/36565852) | metadata signals extractable PD data (EC50) |
| `Bundale_2018.pdf` | Bundale S et al., Culturable rare actinomycetes from Indi…, Iranian journal of microbio… (2018) | pd | 4 | not captured | [29997754](https://www.ncbi.nlm.nih.gov/pubmed/29997754) | metadata signals extractable PD data (IC50) |
| `Costa_2014.pdf` | Costa SP et al., Automated evaluation of pharmaceuticall…, Journal of hazardous materi… (2014) | pd | 4 | [10.1016/j.jhazmat.2013.11.052](https://doi.org/10.1016/j.jhazmat.2013.11.052) | [24355776](https://www.ncbi.nlm.nih.gov/pubmed/24355776) | metadata signals extractable PD data (EC50) |
| `Flanjak_2024.pdf` | Flanjak L et al., Ecotoxicity and rapid degradation of qu…, Chemosphere (2024) | pd | 4 | [10.1016/j.chemosphere.2023.140584](https://doi.org/10.1016/j.chemosphere.2023.140584) | [37925031](https://www.ncbi.nlm.nih.gov/pubmed/37925031) | metadata signals extractable PD data (EC50) |
| `Long_2021.pdf` | Long Y et al., Proarrhythmic effects induced by benzet…, Toxicology and applied phar… (2021) | pd | 4 | [10.1016/j.taap.2021.115731](https://doi.org/10.1016/j.taap.2021.115731) | [34592322](https://www.ncbi.nlm.nih.gov/pubmed/34592322) | metadata signals extractable PD data (IC50) |

<sub>queue written 2026-09-29T18:01:15.990494+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Bell_2019 | irrelevant | 0 | 0 | The paper is a mechanistic study on insect crop physiology where benzethonium chloride is used as a pharmacological agonist, not a pharmacokinetic study reporting disposition parameters for the drug. |
| PD | Bell_2019 | not_relevant | 4 | 3 | The paper reports an IC50 for myosuppressin (a neuropeptide) and qualitative effects of benzethonium chloride, but does not provide numeric PD parameters or a dose-response curve for benzethonium chloride itself. |
| PGx | Brandin_2007 | not_relevant | 0 | 0 | The paper reports a drug-drug interaction (benzethonium chloride inhibiting CYP enzymes affecting warfarin), not a pharmacogenomic effect of a gene variant on benzethonium chloride's PK/PD. |
| popPK | Brown_2023 | irrelevant | 0 | 0 | no_text gate: only 143 chars of text extracted (&lt; 400) |
| popPK | Bundale_2018 | irrelevant | 0 | 0 | no_text gate: only 118 chars of text extracted (&lt; 400) |
| PD | Bundale_2018 | not_relevant | 0 | 0 | The paper focuses on the molecular and physicochemical screening of rare actinomycetes for biosynthetic genes and does not contain any pharmacodynamic or exposure-response data for benzethonium chloride. |
| popPK | Camargo_2025 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of linalool, not benzethonium_chloride. |
| PD | Camargo_2025 | not_relevant | 0 | 0 | The paper studies linalool and its beta-cyclodextrin complex, not benzethonium chloride. |
| popPK | Coates_2001 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of receptor inhibition in Xenopus oocytes and does not report pharmacokinetic parameters for benzethonium chloride. |
| popPK | Costa_2014 | irrelevant | 0 | 0 | no_text gate: only 145 chars of text extracted (&lt; 400) |
| popPK | Durieux_1997 | irrelevant | 0 | 0 | no_text gate: only 115 chars of text extracted (&lt; 400) |
| popPK | Flanjak_2024 | irrelevant | 0 | 0 | no_text gate: only 124 chars of text extracted (&lt; 400) |
| PD | Flanjak_2024 | not_relevant | 0 | 0 | The paper focuses on the ecotoxicity and degradation kinetics of quaternary ammonium compounds (including benzethonium chloride) under UV treatment, not on pharmacodynamic exposure-response relationships in a biological host. |
| popPK | Gapińska_2025 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of SSR504734, not benzethonium_chloride. |
| PD | Gapińska_2025 | not_relevant | 0 | 0 | The paper investigates SSR504734, not benzethonium chloride, and does not report specific numeric PD parameters for the target drug. |
| popPK | Gough_2017 | irrelevant | 0 | 0 | The paper is a pharmacological study on insect neuropeptides and uses benzethonium chloride as a non-peptide agonist/mimetic, reporting no pharmacokinetic parameters (CL, V, etc.) for the drug. |
| popPK | Ianevski_2026 | irrelevant | 0 | 0 | The paper is a multiomics and drug screening study on T-cell leukemia cell lines and does not report pharmacokinetic parameters for benzethonium chloride. |
| PD | Ianevski_2026 | not_relevant | 0 | 0 | The paper describes a multiomics profiling resource for T-cell leukemia and lymphoma cell lines and does not report any pharmacodynamic or exposure-response analysis for benzethonium chloride. |
| popPK | LeBouf_2017 | irrelevant | 0 | 0 | no_text gate: only 141 chars of text extracted (&lt; 400) |
| PD | LeBouf_2017 | not_relevant | 0 | 0 | The paper describes an analytical method (LC-MS/MS) for sampling quaternary ammonium compounds and does not report any pharmacodynamic or exposure-response data. |
| popPK | Long_2013 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of HERG channel inhibition using patch clamp, not a pharmacokinetic study reporting disposition parameters. |
| popPK | Long_2021 | irrelevant | 0 | 0 | no_text gate: only 96 chars of text extracted (&lt; 400) |
| PD | Long_2021 | not_relevant | 0 | 0 | The provided text is only the title of the paper and does not contain the full text, data, or numeric PD parameters required to assess the exposure-response relationship. |
| popPK | Mihara_2005 | irrelevant | 0 | 0 | The paper is an environmental toxicology study on activated sludge biosorption and oxygen uptake inhibition, not a pharmacokinetic study, and benzethonium chloride is only one of many test chemicals. |
| popPK | Mingqi_2026 | irrelevant | 0 | 0 | The paper studies calcium dobesilate interference in protein assays where benzethonium chloride is used as a reagent, not as a subject drug for pharmacokinetic analysis. |
| popPK | Nomura_2010 | irrelevant | 0 | 0 | The paper is an in-vitro cytotoxicity and cell cycle study, not a pharmacokinetic study, and reports no disposition parameters for benzethonium chloride. |
| popPK | Rafsanjany_2015 | irrelevant | 0 | 0 | The paper is an in-vitro study on herbal contaminants where benzethonium chloride is identified as a contaminant, not a subject of pharmacokinetic analysis. |
| PD | Rafsanjany_2015 | not_relevant | 3 | 1 | The paper reports an IC50 for the herbal extract but only qualitatively identifies benzethonium chloride as a contaminant responsible for the activity, without providing specific numeric PD parameters or a concentration-effect curve for benzethonium chloride itself. |
| PGx | Spalding_1999 | not_relevant | 0 | 0 | The paper evaluates the carcinogenic potential of benzethonium chloride in a transgenic mouse model, not the effect of a gene variant on its pharmacokinetics or pharmacodynamics. |
| popPK | Tsutsui_1994 | irrelevant | 0 | 0 | The study is an in-vitro cytotoxicity assay, not a pharmacokinetic study, and reports no disposition parameters for benzethonium chloride. |
| popPK | Wang_2023 | irrelevant | 0 | 0 | The paper studies the pharmacology of GDF15 in mice and does not mention benzethonium_chloride or report any pharmacokinetic parameters for it. |
| PD | Wang_2023 | not_relevant | 0 | 0 | The paper investigates GDF15, not benzethonium chloride, and does not report a pharmacodynamic model or numeric PD parameters for the target drug. |
| popPK | de_2020 | irrelevant | 0 | 0 | The paper is a developmental study on preterm rabbits where benzethonium chloride is only mentioned as a reagent for the urinary protein assay, not as a subject drug for pharmacokinetic analysis. |
| PD | de_2020 | not_relevant | 0 | 0 | The paper investigates renal development in preterm rabbits and does not involve benzethonium chloride or any drug exposure-response analysis. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
