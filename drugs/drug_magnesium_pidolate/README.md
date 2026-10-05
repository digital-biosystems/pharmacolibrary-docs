<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;A12C&quot;,&quot;href&quot;:&quot;atc/A12C.md&quot;},{&quot;label&quot;:&quot;magnesium pidolate&quot;}]"></div>

# magnesium pidolate

- **generic name:** magnesium pidolate
- **ATC codes:** `A12CC08`
- **DrugBank:** [DB03088](https://go.drugbank.com/drugs/DB03088) · **PubChem:** not captured
- **groups:** approved, investigational

## About

Magnesium pidolate is a magnesium salt used as a mineral supplement to treat or prevent magnesium deficiency. It is an approved supplement, though it is not authorised centrally in the European Union and appears to be used only in a limited number of countries.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q27291565](https://www.wikidata.org/wiki/Q27291565) and the WHO ATC classification; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-05 09:59 | 4:01 | 0/0/0 | 0/0/0 | 0/0/0 | 160,100/2,960 | ollama / qwen3.8:27b-mtp-q8_0 | 12 | 4/10 | 12/0 | 0 |

## popPK records

_not available_

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=magnesium_pidolate) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | skin | <sub>named in DrugBank's ADME text</sub> | prose |

<sub>Actors without a tissue in the table: ADAM28 (unknown), AMY2A (inhibitor), AMY2A (target), AMY2B (unknown), CCL8 (unknown), HCRT (unknown), IGLC1 (unknown), IGLV2-8 (unknown), KRTAP5-2 (unknown), TFF2 (unknown), VEGFA (unknown).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 23 matched, 51 returned
- **screened:** 2  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Ajiboye_2024 | irrelevant | 0 | 0 | The paper is an in silico study on prostate cancer drug repurposing and does not mention magnesium_pidolate or report any pharmacokinetic parameters for it. |
| popPK | Baechtel_1976 | irrelevant | 0 | 0 | The paper is an in-vitro immunology study on lymphocyte blast transformation and does not involve magnesium_pidolate or pharmacokinetic parameters. |
| PD | Baechtel_1976 | not_relevant | 0 | 0 | The paper investigates the effect of glutamine on lymphocyte transformation, not magnesium pidolate. |
| popPK | Bakken_1998 | irrelevant | 0 | 0 | The paper investigates glutamate metabolism in astrocytes and does not involve magnesium_pidolate or any pharmacokinetic parameters. |
| popPK | Bernengo_2001 | irrelevant | 0 | 0 | The study measures intracellular diffusion coefficients in isolated rat muscle fibers, not systemic pharmacokinetic parameters (CL, V, ka) for magnesium pidolate. |
| PD | Bernengo_2001 | not_relevant | 0 | 0 | The paper reports intracellular diffusion coefficients of magnesium, not a pharmacodynamic exposure-response or dose-response relationship for the drug. |
| popPK | Bio_2026 | irrelevant | 0 | 0 | The study evaluates the radiopharmaceutical [177Lu]Lu-ART-101, not magnesium_pidolate. |
| popPK | Boyko_2018 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of noopept and its metabolite, not magnesium_pidolate. |
| popPK | Burnatowska_1985 | irrelevant | 0 | 0 | The study investigates the renal handling of elemental magnesium in hamsters, not the pharmacokinetics of the drug magnesium pidolate. |
| popPK | Casteels_1993 | irrelevant | 0 | 0 | The paper describes the characterization of an antibacterial polypeptide from honeybees and contains no pharmacokinetic data for magnesium_pidolate. |
| PD | Casteels_1993 | not_relevant | 0 | 0 | The paper characterizes a novel antibacterial polypeptide (hymenoptaecin) and does not mention magnesium pidolate or report any pharmacodynamic parameters for it. |
| popPK | Castiglioni_2026 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of magnesium pidolate's effects on brain organoids and does not report pharmacokinetic parameters. |
| PD | Castiglioni_2026 | not_relevant | 2 | 1 | The study compares two fixed concentrations (1 mM vs 5 mM) and reports qualitative changes in receptor expression and morphology, but does not provide a dose-response curve or numeric PD parameters (e.g., EC50, Emax) for magnesium pidolate. |
| popPK | Chan_1994 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics and pharmacodynamics of warfarin, not magnesium_pidolate. |
| popPK | Chien_2020 | irrelevant | 0 | 0 | The paper describes an electrochemical sensor for therapeutic drug monitoring and does not report pharmacokinetic parameters for magnesium_pidolate. |
| popPK | Colucci_2024 | irrelevant | 0 | 0 | The paper is a mechanistic study on retinoic acid receptor activation and senescence in prostate cancer, containing no pharmacokinetic data for magnesium_pidolate. |
| popPK | Guiet-Bara_1999 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of ionic permeability through amniotic membranes, not a pharmacokinetic study reporting disposition parameters. |
| PD | Guiet-Bara_1999 | not_relevant | 4 | 2 | The paper describes qualitative concentration-dependent effects (decrease-increase, monophasic decrease) on ionic permeability but does not provide numeric PD parameters (Emax, EC50) or quantitative data points to derive a curve. |
| popPK | Gurel_2022 | irrelevant | 0 | 0 | The paper analyzes the structural and functional properties of a monoclonal antibody biosimilar (Avastin/SIMAB054) and does not involve magnesium_pidolate. |
| popPK | Jiang_2025 | irrelevant | 0 | 0 | The paper describes a PSMA-targeted NIR-II nanoprobe for prostate cancer imaging and does not involve magnesium_pidolate or its pharmacokinetics. |
| popPK | Kim_2020 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of p-Coumaric acid, not magnesium_pidolate. |
| popPK | Kim_2023 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of mirabegron, not magnesium_pidolate. |
| popPK | Kunert_2023 | irrelevant | 0 | 0 | The paper studies 99mTc-labeled PSMA radioligands for prostate cancer, not the pharmacokinetics of magnesium_pidolate. |
| popPK | Kurpad_2002 | irrelevant | 0 | 0 | The paper discusses stable isotope breath tests for metabolic diagnostics and does not mention magnesium_pidolate or report any pharmacokinetic parameters for it. |
| popPK | Larroque-Lombard_2021 | irrelevant | 0 | 0 | The paper describes a novel combi-molecule (AL530) releasing chlorambucil and PD98059, and does not involve magnesium_pidolate. |
| PD | Larroque-Lombard_2021 | not_relevant | 0 | 0 | The paper describes a novel pH-labile combi-molecule (AL530) and its mechanism of action, but does not report any pharmacodynamic or exposure-response relationship for magnesium pidolate. |
| popPK | Lee_1976 | irrelevant | 0 | 0 | The paper studies the immunology of hapten-carrier conjugates (DNP-OA and DNP-MgammaG) in mice and rats, not the pharmacokinetics of magnesium_pidolate. |
| popPK | Li_2023 | irrelevant | 0 | 0 | The paper investigates skin pH and antibacterial activity against S. aureus, and does not study the pharmacokinetics of magnesium_pidolate. |
| PD | Li_2023 | not_relevant | 0 | 0 | The paper investigates the relationship between skin pH, natural moisturizing factors, and antibacterial activity against S. aureus, but does not report any pharmacodynamic or exposure-response data for magnesium pidolate. |
| popPK | Luyasu_2014 | irrelevant | 0 | 0 | The paper is a case report on pyroglutamic acid-induced metabolic acidosis and does not involve magnesium_pidolate or its pharmacokinetics. |
| popPK | Lv_2025 | irrelevant | 0 | 0 | The paper investigates the role of BRD9 in prostate cancer metabolism and does not involve the drug magnesium_pidolate or any pharmacokinetic analysis. |
| popPK | M_2026 | irrelevant | 0 | 0 | The paper describes the synthesis and antioxidant activity of cyclic dipeptides and does not involve magnesium_pidolate or pharmacokinetics. |
| PD | M_2026 | not_relevant | 0 | 0 | The paper studies the synthesis and antioxidant activity of cyclic dipeptides, not the pharmacodynamics of magnesium pidolate. |
| popPK | Mesquita_2021 | irrelevant | 0 | 0 | The paper studies porphyrinoid derivatives for photodynamic therapy of prostate cancer and does not involve magnesium_pidolate. |
| popPK | Ogiso_1982 | irrelevant | 0 | 0 | The provided evidence contains only software metadata and no scientific content regarding magnesium_pidolate pharmacokinetics. |
| popPK | Ogiso_1984 | irrelevant | 0 | 0 | The provided evidence contains only software metadata and no scientific content regarding magnesium_pidolate pharmacokinetics. |
| popPK | Romeo_2019 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of BBB permeability and transport, not a pharmacokinetic study reporting quantitative disposition parameters. |
| PD | Romeo_2019 | not_relevant | 2 | 1 | The paper reports qualitative comparative efficacy of magnesium salts on BBB permeability but does not provide numeric concentration-effect curves or PD parameters (e.g., EC50, Emax) for magnesium pidolate. |
| popPK | Rosenberg_1992 | irrelevant | 0 | 0 | The paper discusses patient-controlled analgesia for postoperative pain and does not report pharmacokinetic parameters for magnesium_pidolate. |
| popPK | Rui_2025 | irrelevant | 0 | 0 | The study investigates the neuroprotective mechanisms of protocatechuic acid in Parkinson's disease models and does not involve magnesium_pidolate or its pharmacokinetics. |
| popPK | Sariev_2003 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of pyrrolidone, not magnesium_pidolate. |
| popPK | Sariev_2006 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of pyrrolidone and pyroglutamic acid, not magnesium_pidolate. |
| popPK | Seo_2025 | irrelevant | 0 | 0 | The study evaluates a PSMA-targeted radiotracer ([64Cu/67Cu]Cu-NGUL) and does not involve magnesium_pidolate. |
| popPK | Sharma_2022 | irrelevant | 0 | 0 | The study evaluates the biodistribution and dosimetry of radiopharmaceuticals (18F-PSMA-1007 and 68Ga-PSMA-11) for prostate cancer imaging, not the pharmacokinetics of magnesium_pidolate. |
| popPK | Takahama_2025 | irrelevant | 0 | 0 | The study evaluates the pharmacokinetics of SA-5 (a TLR7 agonist) in cynomolgus monkeys, not magnesium_pidolate. |
| popPK | Than_2017 | irrelevant | 0 | 0 | The paper is a clinical review of magnesium for sickle cell disease and does not report any pharmacokinetic parameters (CL, V, ka, etc.) for magnesium pidolate. |
| PD | Than_2017 | not_relevant | 1 | 0 | The paper is a systematic review of clinical trials evaluating clinical outcomes (pain, hospital stay) and does not report any pharmacokinetic or pharmacodynamic modeling, concentration-effect relationships, or numeric PD parameters. |
| popPK | Than_2019 | irrelevant | 0 | 0 | This is a clinical review of magnesium's efficacy in sickle cell disease and does not report any pharmacokinetic parameters for magnesium pidolate. |
| PD | Than_2019 | not_relevant | 1 | 0 | This is a systematic review of clinical trials that reports no significant differences in clinical outcomes or magnesium levels between treatment and placebo groups, containing no exposure-response modeling or numeric PD parameters. |
| popPK | Thijssen_1983 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of acenocoumarol and its metabolites in rats, not magnesium_pidolate. |
| popPK | Weemaes_2020 | irrelevant | 0 | 0 | The paper is a case report on D-lactic acidosis and discusses the pharmacokinetics of D-lactate, not magnesium_pidolate. |
| popPK | Winn_1989 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of vitamin K1 in rabbits, not magnesium_pidolate. |
| popPK | Wu_2022 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of the radiotracer Al18F-PSMA-Q, not magnesium_pidolate. |
| popPK | Xu_2017 | irrelevant | 0 | 0 | The study evaluates a radiopharmaceutical (99mTc-HYNIC-ALUG) for prostate cancer imaging and does not involve magnesium_pidolate. |
| popPK | Xu_2021 | irrelevant | 0 | 0 | The paper is a mechanistic study on autophagy in Drosophila and does not involve magnesium_pidolate or pharmacokinetics. |
| popPK | Yoshida_1992 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of p-chloroaniline (p-CA) and its metabolites, not magnesium_pidolate. |
| popPK | Yu_2002 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of L-5-oxoproline in burned humans, not magnesium_pidolate. |
| popPK | Yu_2023 | irrelevant | 0 | 0 | The study evaluates the pharmacokinetics of febuxostat, not magnesium_pidolate. |
| popPK | Zhao_2026 | irrelevant | 0 | 0 | The paper investigates a sialidase inhibitor for ulcerative colitis and does not mention magnesium_pidolate or report any pharmacokinetic parameters. |
| PD | Zhao_2026 | not_relevant | 0 | 0 | The paper investigates a sialidase inhibitor for ulcerative colitis and does not mention magnesium pidolate or report any pharmacodynamic or exposure-response parameters. |
| popPK | Zheng_2025 | irrelevant | 0 | 0 | The paper investigates hematoma resolution and Treg differentiation in mice after intracerebral hemorrhage and does not involve magnesium_pidolate or any pharmacokinetic parameters. |
| popPK | Zhu_2021 | irrelevant | 0 | 0 | The paper is a review on oral delivery of proteins and peptides and does not contain pharmacokinetic data for magnesium_pidolate. |
| popPK | de_1991 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics and pharmacodynamics of daunorubicin, not magnesium_pidolate. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
