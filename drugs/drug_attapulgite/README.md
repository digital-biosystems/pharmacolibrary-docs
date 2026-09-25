<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;A07B&quot;,&quot;href&quot;:&quot;atc/A07B.md&quot;},{&quot;label&quot;:&quot;attapulgite&quot;}]"></div>

# attapulgite

- **generic name:** attapulgite
- **ATC codes:** `A07BC04`
- **DrugBank:** [DB01574](https://go.drugbank.com/drugs/DB01574)
- **groups:** approved, vet_approved, withdrawn

## About

**Description.** Attapulgite is a magnesium aluminium phyllosilicate which occurs in a type of clay soil common to the Southeastern United States. When used in medicine, it physically binds to acids and toxic substances in the stomach and digestive tract. For that reason, it has often been used in antidiarrheal medications. Until 2003, it was the active ingredient used in Kaopectate, before that product was reformulated with bismuth subsalicylate.

**Indication.** When used in medicine, it physically binds to acids and toxic substances in the stomach and digestive tract. For that reason, it has often been used in antidiarrheal medications. Attapulgite is an adsorbent.

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-09-22 02:44 | 7:59 | 0/0/0 | 0/0/0 | 0/0/0 | 214,265/6,397 | ollama / qwen3.8:27b-mtp-q8_0 | 10 | 1/9 | 10/0 | 0 |

## popPK records

_not available_

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 44 matched, 42 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full text wanted

_1 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Masse_1980.pdf` | Masse R et al., Experimental demonstration of the penet…, IARC scientific publications (1980) | pd | 4 | not captured | [7239651](https://www.ncbi.nlm.nih.gov/pubmed/7239651) | metadata signals extractable PD data (concentration-effect) |

<sub>queue written 2026-09-22T02:43:29.547498+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Argiri_2026 | irrelevant | 0 | 0 | The paper is an environmental soil remediation study using attapulgite as an amendment, not a pharmacokinetic study of the drug. |
| popPK | Cao_2022 | irrelevant | 0 | 0 | The study investigates attapulgite as a soil amendment for reducing microcystin-LR bioaccumulation in lettuce, not as a drug subject to pharmacokinetic analysis. |
| popPK | Chen_2018 | irrelevant | 0 | 0 | The paper investigates the environmental remediation of cadmium-contaminated soil using attapulgite, not the pharmacokinetics of attapulgite as a drug. |
| PD | Chen_2018 | not_relevant | 0 | 0 | The paper describes soil remediation and plant uptake reduction (environmental science/agriculture), not pharmacodynamic exposure-response relationships in a biological system. |
| popPK | Chen_2022 | irrelevant | 0 | 0 | The paper is an environmental engineering study on adsorption of heavy metals by attapulgite, not a pharmacokinetic study. |
| PD | Chen_2022 | not_relevant | 0 | 0 | The paper describes environmental remediation (adsorption of heavy metals from acid mine drainage) and reports adsorption capacities and isotherm parameters, which are not pharmacodynamic (drug exposure-response) relationships. |
| popPK | Chen_2022_2 | irrelevant | 0 | 0 | The paper investigates attapulgite's role in heavy metal passivation during composting, which is an environmental remediation study, not a pharmacokinetic study. |
| popPK | Cui_2023 | irrelevant | 0 | 0 | The paper describes attapulgite as an adsorbent for cadmium removal in aqueous solutions, not as a drug subject to pharmacokinetic analysis. |
| PD | Cui_2023 | not_relevant | 0 | 0 | The paper describes the adsorption of cadmium by modified attapulgite (a material science/environmental chemistry study), not a pharmacodynamic or exposure-response relationship for a drug. |
| popPK | Cui_2024 | irrelevant | 0 | 0 | The paper is a soil remediation study using attapulgite as a soil amendment, not a pharmacokinetic study. |
| PD | Cui_2024 | not_relevant | 0 | 0 | The paper is an environmental soil science study on heavy metal remediation, not a pharmacological study, and does not report any drug exposure-response or dose-response relationships. |
| popPK | Doser_1995 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of loperamide, not attapulgite. |
| popPK | Gong_2025 | irrelevant | 0 | 0 | The study focuses on the drug delivery system (attapulgite microspheres) for berberine and reports therapeutic efficacy and release profiles, but does not provide quantitative pharmacokinetic parameters (CL, V, ka, etc.) for attapulgite itself. |
| popPK | Han_2026 | irrelevant | 0 | 0 | The paper is a review on 3D bioprinting of cartilage organoids where attapulgite is discussed only as a biomaterial component for scaffolds, not as a drug subject to pharmacokinetic analysis. |
| popPK | Hao_2025 | irrelevant | 0 | 0 | The paper is a mechanistic study on the biological effects of attapulgite nanorods on lysosomal function and autophagy, not a pharmacokinetic study reporting quantitative disposition parameters. |
| popPK | He_2021 | irrelevant | 0 | 0 | The paper is an agricultural field study on cadmium immobilization in soil, not a pharmacokinetic study of attapulgite. |
| popPK | Li_2019 | irrelevant | 0 | 0 | The study is an environmental science paper on soil remediation and cadmium accumulation in rice, not a pharmacokinetic study of attapulgite. |
| popPK | Liang_2019 | irrelevant | 0 | 0 | The paper is a soil remediation study investigating the effect of attapulgite on cadmium accumulation in wheat, not a pharmacokinetic study of attapulgite as a drug. |
| popPK | Liu_2020 | irrelevant | 0 | 0 | The paper is a soil science study on cadmium immobilization and hydraulic characteristics, not a pharmacokinetic study of attapulgite. |
| popPK | Liu_2024 | irrelevant | 0 | 0 | The paper describes attapulgite as a material for soil remediation (adsorption of cadmium), not as a drug for pharmacokinetic study. |
| popPK | Luo_2023 | irrelevant | 0 | 0 | The paper describes a chemical process for phosphate removal using attapulgite as a material, not a pharmacokinetic study of attapulgite as a drug. |
| PD | Luo_2023 | not_relevant | 0 | 0 | The paper describes a chemical engineering process for phosphate removal using attapulgite as a sorbent/co-precipitant, not a pharmacodynamic study of a drug. |
| popPK | Masse_1980 | irrelevant | 2 | 0 | The study investigates the translocation of attapulgite fibres into lymph (a toxicological/physiological endpoint) rather than reporting standard pharmacokinetic disposition parameters (CL, V, ka) for the drug. |
| PD | Masse_1980 | not_relevant | 2 | 1 | The paper reports qualitative kinetics of fiber absorption (time to 50% absorption, max passage fraction) but does not provide a concentration-effect curve or numeric PD parameters (Emax, EC50) for attapulgite. |
| popPK | McGinity_1975 | irrelevant | 0 | 0 | The study focuses on the adsorption of neomycin sulfate to attapulgite clays (attapulgite is the adsorbent, not the subject drug) and does not report pharmacokinetic parameters for attapulgite. |
| popPK | Pan_2025 | irrelevant | 0 | 0 | The paper is a soil remediation study where attapulgite is used as a passivation agent, not a pharmacokinetic study of the drug. |
| popPK | Ren_2021 | irrelevant | 0 | 0 | The paper investigates the environmental stabilization of heavy metals in sewage sludge using attapulgite as a clay amendment, not the pharmacokinetics of attapulgite as a drug. |
| popPK | Ren_2026 | irrelevant | 0 | 0 | The paper describes the use of attapulgite as a soil amendment for heavy metal remediation, not as a drug for pharmacokinetic study. |
| popPK | Tao_2024 | irrelevant | 0 | 0 | The paper is a soil remediation study investigating the immobilization of Cadmium by attapulgite clay, not a pharmacokinetic study of attapulgite as a drug. |
| popPK | Tsakala_1990 | irrelevant | 0 | 0 | The study is an in vitro adsorption experiment involving chloroquine and Mouboumou, not a pharmacokinetic study of attapulgite. |
| popPK | Turan_2019 | irrelevant | 0 | 0 | The paper is a soil remediation study using attapulgite as an amendment to reduce nickel bioavailability, not a pharmacokinetic study of attapulgite as a drug. |
| popPK | Wang_2016 | irrelevant | 0 | 0 | The paper investigates the material science of attapulgite nanocomposites for oil absorption, not pharmacokinetics. |
| popPK | Wang_2019 | irrelevant | 0 | 0 | The paper studies attapulgite as a material for heavy metal immobilization in sediment, not as a drug for pharmacokinetic analysis. |
| popPK | Wang_2022 | irrelevant | 0 | 0 | The paper is an in-vitro materials science study on drug release from nanofibers and does not report pharmacokinetic parameters for attapulgite. |
| popPK | Wang_2023 | irrelevant | 0 | 0 | The paper is an environmental soil remediation study focusing on heavy metal immobilization, not a pharmacokinetic study of attapulgite. |
| popPK | Wang_2024 | irrelevant | 0 | 0 | The paper is an ecological field study on herbicide effects on soil microflora where attapulgite is used as a soil amendment, not a pharmacokinetic study of the drug. |
| PD | Wang_2024 | not_relevant | 0 | 0 | The paper focuses on the ecological impact of a herbicide on soil bacterial diversity and does not report any pharmacodynamic or exposure-response relationship for attapulgite. |
| popPK | Wang_2024_2 | irrelevant | 0 | 0 | The paper is a phytoremediation study using attapulgite as a soil amendment, not a pharmacokinetic study of the drug. |
| popPK | Xiao_2021 | irrelevant | 0 | 0 | The paper is an environmental science study on soil amendments and cadmium accumulation in plants, not a pharmacokinetic study of attapulgite. |
| popPK | Xiaosan_2022 | irrelevant | 0 | 0 | The paper is an in-vitro adsorption study of tetracycline using attapulgite as a material, not a pharmacokinetic study of attapulgite as a drug. |
| PD | Xiaosan_2022 | not_relevant | 0 | 0 | The paper describes the adsorption of tetracycline by an attapulgite composite in an environmental context, not a pharmacodynamic (drug effect) relationship in a biological system. |
| popPK | Yang_2026 | irrelevant | 0 | 0 | The paper describes attapulgite as a material component in a nanocomposite wound dressing for antibacterial therapy, not as a drug subject to pharmacokinetic analysis. |
| popPK | Yang_2026_2 | irrelevant | 0 | 0 | The paper is a materials science study on salt-storage pavement fillers, not a pharmacokinetic study, and attapulgite is used as a carrier material rather than a drug subject. |
| PD | Yang_2026_2 | not_relevant | 0 | 0 | The paper describes the engineering development of a salt-storage pavement material and reports deicing performance metrics (e.g., deicing rate, service life), but it does not contain any pharmacodynamic (PD) or exposure-response analysis for the drug attapulgite. |
| popPK | Zhang_2018 | irrelevant | 0 | 0 | The paper is about groundwater remediation and attapulgite is only mentioned as a material for absorbing ammonia/chroma, not as a subject drug for pharmacokinetic analysis. |
| popPK | Zhang_2023 | irrelevant | 0 | 0 | The paper is a civil engineering study on the permeability of attapulgite-modified loess for landfill liners, not a pharmacokinetic study. |
| PD | Zhang_2023 | not_relevant | 0 | 0 | The paper investigates the geotechnical properties (permeability) of attapulgite-modified soil, not the pharmacodynamic or exposure-response relationship of attapulgite as a drug. |
| popPK | Zhang_2026 | irrelevant | 0 | 0 | The paper is a mechanistic environmental chemistry study on chromium adsorption by modified minerals, not a pharmacokinetic study of attapulgite. |
| popPK | Zheng_2023 | irrelevant | 0 | 0 | The paper is an in-vitro adsorption study of biochar composites for water treatment, not a pharmacokinetic study of attapulgite as a drug. |
| PD | Zheng_2023 | not_relevant | 0 | 0 | The paper describes the adsorption capacity of modified biochar for dyes and antibiotics, which is a physicochemical environmental engineering study, not a pharmacodynamic (drug effect) study. |
| popPK | Zhu_2024 | irrelevant | 0 | 0 | The paper is a soil science study on heavy metal remediation using attapulgite-modified biochar, not a pharmacokinetic study. |
| popPK | Zhu_2025 | irrelevant | 0 | 0 | The paper is an environmental science study on heavy metal adsorption by an attapulgite composite, not a pharmacokinetic study of attapulgite as a drug. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
