<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;A09A&quot;,&quot;href&quot;:&quot;atc/A09A.md&quot;},{&quot;label&quot;:&quot;betaine hydrochloride&quot;}]"></div>

# betaine hydrochloride

- **generic name:** betaine hydrochloride
- **ATC codes:** `A09AB02`
- **DrugBank:** not captured · **PubChem:** not captured
- **groups:** not captured

## About

Betaine hydrochloride is an acid preparation that was used as a digestive aid, acting as a gastrointestinal agent to support stomach acid levels. It is no longer used as a medicine and has been discontinued, though it may still be found in dietary supplements.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q27281552](https://www.wikidata.org/wiki/Q27281552) and the WHO ATC classification; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-04 20:58 | 2:22 | 0/0/0 | 0/0/0 | 0/0/0 | 76,764/1,983 | ollama / qwen3.8:27b-mtp-q8_0 | 11 | 2/8 | 11/0 | 0 |

## popPK records

_not available_

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 3 matched, 31 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full text wanted

_1 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Che_2024.pdf` | Che Y et al., Preparation of betaine injection and it…, Basic & clinical pharmacolo… (2024) | popPK | 8 | [10.1111/bcpt.13966](https://doi.org/10.1111/bcpt.13966) | [38009574](https://pubmed.ncbi.nlm.nih.gov/38009574) | The study reports pharmacokinetic parameters (half-life, circulation time) for betaine, but specific numeric values are not present in the provided abstract text. |

<sub>queue written 2026-10-04T20:58:56.577323+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Al-Maqbali_2026 | irrelevant | 0 | 0 | The study investigates magnesium oxide supplementation in type 2 diabetes and does not involve betaine hydrochloride or report any pharmacokinetic parameters for it. |
| popPK | Al_2025 | irrelevant | 0 | 0 | The study is a pharmacodynamic/toxicology investigation of betaine combinations in rats, reporting biomarkers and histology rather than quantitative pharmacokinetic parameters (CL, V, ka) for betaine. |
| popPK | Aquilonius_1975 | irrelevant | 0 | 0 | The study investigates the clearance of quaternary amines (choline, methylatropine, decamethonium) in rabbits, and betaine is only mentioned as a minor metabolite of choline, not as the subject drug. |
| popPK | Besseghir_1981 | irrelevant | 0 | 0 | The study focuses on the renal transport of choline and NMN, where betaine is identified as a metabolite of choline, not as the subject drug being dosed for PK characterization. |
| popPK | Boonjarern_1976 | irrelevant | 0 | 0 | The study investigates glucose pharmacokinetics in rats and does not involve betaine_hydrochloride. |
| popPK | Che_2024 | relevant | 8 | 2 | The study reports pharmacokinetic parameters (half-life, circulation time) for betaine, but specific numeric values are not present in the provided abstract text. |
| popPK | Deetz_1981 | irrelevant | 0 | 0 | The study investigates parathyroid hormone, insulin, and mineral clearance in cows, with no mention of betaine hydrochloride. |
| popPK | Eisenstadt_1975 | irrelevant | 0 | 0 | The study investigates the metabolism of acetylcholine in Aplysia neurons, where betaine is identified as a metabolic end-product, not as the subject drug for pharmacokinetic analysis. |
| popPK | Gizzatov_2021 | irrelevant | 0 | 0 | The paper is a study on supercritical CO2 foam formation using surfactants (including betaine derivatives) for carbon sequestration, not a pharmacokinetic study of betaine hydrochloride. |
| popPK | Haskins_2023 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of quercetin (QUE) cocrystals, where betaine is used only as a coformer, not as the subject drug. |
| popPK | Haubrich_1975 | irrelevant | 0 | 0 | The study focuses on choline pharmacokinetics and metabolism in guinea pigs, with betaine mentioned only as a metabolite, not as the subject drug. |
| popPK | He_2025 | irrelevant | 0 | 0 | The study is a non-targeted metabolomics analysis of cerebrospinal fluid in brain injury patients, where betaine is identified as a cleared metabolite, not a pharmacokinetic study of betaine hydrochloride as a drug. |
| popPK | Hitz_1981 | irrelevant | 0 | 0 | The study investigates the biosynthetic pathway of betaine in barley leaves using radiotracers, not the pharmacokinetics of betaine hydrochloride as a drug. |
| popPK | Kumar_2016 | irrelevant | 0 | 0 | The paper is a review of therapeutic approaches for homocystinuria and does not report original quantitative pharmacokinetic parameters for betaine hydrochloride. |
| popPK | Lee_2025 | irrelevant | 0 | 0 | The study focuses on turmeric extract in mice and only mentions betaine as a metabolite whose levels were modulated, without providing any pharmacokinetic parameters for betaine hydrochloride. |
| popPK | Lever_1994 | irrelevant | 0 | 0 | The study focuses on glycine betaine and proline betaine, not betaine hydrochloride, and does not report specific PK parameters like CL or V for the target drug. |
| popPK | Lever_2017 | irrelevant | 0 | 0 | The study focuses on the identification and quantification of a metabolite (DMGO) and does not report pharmacokinetic parameters (CL, V, ka, etc.) for betaine hydrochloride. |
| popPK | López-Rojas_2017 | irrelevant | 0 | 0 | The study is an in vitro antimicrobial susceptibility assay (MIC/MBC) of a polyhexanide-betaine solution against bacteria, not a pharmacokinetic study of betaine hydrochloride. |
| popPK | Olivieri_2026 | irrelevant | 0 | 0 | The paper is a clinical guideline for remethylation disorders and does not report any pharmacokinetic parameters for betaine hydrochloride. |
| popPK | Reubi_1984 | irrelevant | 0 | 0 | The paper studies renal glycosuria in nephrotic syndrome patients and does not involve betaine_hydrochloride or its pharmacokinetics. |
| popPK | Sakamoto_2021 | irrelevant | 0 | 0 | The paper is a crystal engineering study on oxyresveratrol cocrystals where betaine is used only as a coformer, not as the subject drug for pharmacokinetic analysis. |
| popPK | Sharma_2022 | irrelevant | 0 | 0 | The study investigates the protective effects of betaine on arsenic-induced renal dysfunction in rats and does not report pharmacokinetic parameters (CL, V, ka, etc.) for betaine. |
| popPK | Teixeira_2024 | irrelevant | 0 | 0 | The paper focuses on the formulation of deep eutectic solvents and solid-liquid equilibrium phase diagrams, not on the pharmacokinetic parameters of betaine hydrochloride. |
| popPK | Wales_1986 | irrelevant | 0 | 0 | The study investigates the hemodynamic and renal effects of prostaglandins in European eels and does not involve betaine_hydrochloride or its pharmacokinetics. |
| popPK | Wang_2025 | irrelevant | 0 | 0 | The paper focuses on the formulation and biological activity of a betaine-salicylic acid cocrystal for skincare, not the pharmacokinetics of betaine hydrochloride. |
| popPK | Xu_2020 | irrelevant | 0 | 0 | The paper investigates nanoparticle-stabilized foams for enhanced oil recovery, where betaine is used as a surfactant, not as a drug for pharmacokinetic analysis. |
| popPK | Zheng_2021 | irrelevant | 0 | 0 | The paper investigates the antimicrobial and biofilm-disrupting effects of PHMB and undecylenamidopropyl betaine (a surfactant) on bacteria and fungi, not the pharmacokinetics of betaine hydrochloride. |
| popPK | Zhou_2026 | irrelevant | 0 | 0 | The paper is a structural biology study (cryo-EM) of the BGT1 transporter, not a pharmacokinetic study of betaine hydrochloride, and reports no disposition parameters (CL, V, t1/2) for the drug. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
