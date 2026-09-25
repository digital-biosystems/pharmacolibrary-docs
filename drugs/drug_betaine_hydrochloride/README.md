<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;A09A&quot;,&quot;href&quot;:&quot;atc/A09A.md&quot;},{&quot;label&quot;:&quot;betaine hydrochloride&quot;}]"></div>

# betaine hydrochloride

- **generic name:** betaine hydrochloride
- **ATC codes:** `A09AB02`
- **DrugBank:** not captured
- **groups:** not captured

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-09-14 14:35 | 1:01 | 0/0/0 | 0/0/0 | 0/0/0 | 1,368/258 | ollama / qwen3.8:27b-mtp-q8_0 | 11 | 0/0 | 11/0 | 0 |

## popPK records

_not available_

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr></tbody></table>
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
| `Che_2024.pdf` | Che Y et al., Preparation of betaine injection and it…, Basic & clinical pharmacolo… (2024) | popPK | 8 | [10.1111/bcpt.13966](https://doi.org/10.1111/bcpt.13966) | [38009574](https://pubmed.ncbi.nlm.nih.gov/38009574) | The paper describes a pharmacokinetic study of betaine (betaine hydrochloride) in an animal model, but the specific numeric parameter values (CL, V, t1/2) are not present in the provided evidence text. |

<sub>queue written 2026-09-14T14:35:31.407359+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Al-Maqbali_2026 | irrelevant | 0 | 0 | The paper is a clinical trial regarding magnesium supplementation in diabetes and does not study betaine_hydrochloride or report any pharmacokinetic parameters for it. |
| popPK | Al_2025 | irrelevant | 0 | 0 | The study is a pharmacodynamic/toxicity assessment of betaine combinations in rats, reporting biomarkers and histology rather than pharmacokinetic parameters (CL, V, ka, etc.). |
| popPK | Aquilonius_1975 | irrelevant | 0 | 0 | The study focuses on the clearance of quaternary amines (choline, methylatropine, decamethonium) from spinal CSF, and betaine is only mentioned as a minor metabolite of choline, not as the subject drug for PK parameter estimation. |
| popPK | Besseghir_1981 | irrelevant | 0 | 0 | The study focuses on the renal transport of organic cations (TEA, NMN, choline) in rabbits, and betaine is only mentioned as a metabolite of choline, not as the subject drug for PK parameter estimation. |
| popPK | Boonjarern_1976 | irrelevant | 0 | 0 | The study investigates glucose tubular reabsorption in rats and does not involve betaine_hydrochloride. |
| popPK | Che_2024 | relevant | 8 | 0 | The paper describes a pharmacokinetic study of betaine (betaine hydrochloride) in an animal model, but the specific numeric parameter values (CL, V, t1/2) are not present in the provided evidence text. |
| popPK | Deetz_1981 | irrelevant | 0 | 0 | The study focuses on parathyroid hormone, insulin, and mineral clearance in cows, with no mention of betaine_hydrochloride or its pharmacokinetic parameters. |
| popPK | Eisenstadt_1975 | irrelevant | 0 | 0 | The paper studies acetylcholine metabolism in Aplysia neurons where betaine is only a minor metabolic byproduct, not the subject drug for PK analysis. |
| popPK | Gizzatov_2021 | irrelevant | 0 | 0 | The paper is a study on supercritical CO2 foam formation using surfactants (including betaine derivatives) for enhanced oil recovery, not a pharmacokinetic study of betaine hydrochloride. |
| popPK | Haskins_2023 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of quercetin (QUE) cocrystals, where betaine is used only as a coformer, not as the subject drug. |
| popPK | Haubrich_1975 | irrelevant | 0 | 0 | The study focuses on choline pharmacokinetics and metabolism in guinea pigs, with betaine mentioned only as a metabolite, not as the subject drug for PK parameter estimation. |
| popPK | He_2025 | irrelevant | 0 | 0 | The paper is a metabolomics study on brain injury clearance where betaine is identified as a metabolite, not a drug subject to pharmacokinetic analysis. |
| popPK | Hitz_1981 | irrelevant | 0 | 0 | The paper is a plant physiology study on betaine biosynthesis in barley, not a pharmacokinetic study of betaine hydrochloride in humans or animals. |
| popPK | Kumar_2016 | irrelevant | 0 | 0 | The paper is a review of therapeutic approaches for homocystinuria and does not report any quantitative pharmacokinetic parameters for betaine hydrochloride. |
| popPK | Lee_2025 | irrelevant | 0 | 0 | The paper studies turmeric extract in mice and mentions betaine only as a metabolite whose levels were modulated, not as the subject drug for PK parameter estimation. |
| popPK | Lever_1994 | irrelevant | 2 | 0 | The paper discusses glycine betaine (not betaine hydrochloride specifically as a drug subject) and reports qualitative/relative clearance rates (e.g., "less than 5%") rather than quantitative PK parameters like CL, V, or ka for a pharmacokinetic model. |
| popPK | Lever_2017 | irrelevant | 0 | 0 | The paper focuses on the identification and quantification of N,N-dimethylglycine N-oxide (DMGO) as a metabolite, not on the pharmacokinetic parameters of betaine hydrochloride. |
| popPK | López-Rojas_2017 | irrelevant | 0 | 0 | The paper is an in-vitro microbiology study assessing the antimicrobial activity of a polyhexanide-betaine solution, not a pharmacokinetic study of betaine hydrochloride. |
| popPK | Olivieri_2026 | irrelevant | 0 | 0 | The paper is a clinical guideline for remethylation disorders and does not report any pharmacokinetic parameters for betaine hydrochloride. |
| popPK | Reubi_1984 | irrelevant | 0 | 0 | The paper discusses renal glycosuria and glucose transport in nephrotic syndrome patients, with no mention of betaine_hydrochloride or its pharmacokinetics. |
| popPK | Sakamoto_2021 | irrelevant | 0 | 0 | The paper is a crystallographic study on oxyresveratrol cocrystals where betaine is used as a coformer, not a pharmacokinetic study of betaine hydrochloride. |
| popPK | Sharma_2022 | irrelevant | 0 | 0 | The study investigates the protective effects of betaine on arsenic-induced renal dysfunction and reports biochemical markers (e.g., creatinine clearance) rather than pharmacokinetic disposition parameters (CL, V, ka) for betaine. |
| popPK | Teixeira_2024 | irrelevant | 0 | 0 | The paper focuses on the formulation of deep eutectic solvents and solid-liquid equilibrium for antimalarial drugs, with no pharmacokinetic data or parameters for betaine hydrochloride. |
| popPK | Wales_1986 | irrelevant | 0 | 0 | The study investigates the hemodynamic and renal effects of prostaglandins in eels and does not involve betaine_hydrochloride or report any pharmacokinetic parameters for it. |
| popPK | Wang_2025 | irrelevant | 0 | 0 | The paper focuses on the formulation and biological activity of a betaine-salicylic acid cocrystal for skincare, not the pharmacokinetics of betaine hydrochloride. |
| popPK | Xu_2020 | irrelevant | 0 | 0 | The paper is a study on enhanced oil recovery using foams where betaine is used as a surfactant, not as a drug for pharmacokinetic analysis. |
| popPK | Zheng_2021 | irrelevant | 0 | 0 | The paper is an in-vitro microbiology study on biofilm clearance using betaine as a surfactant, not a pharmacokinetic study of betaine hydrochloride. |
| popPK | Zhou_2026 | irrelevant | 0 | 0 | The paper is a structural biology study (cryo-EM) of the betaine/GABA transporter 1 (BGT1) and does not report pharmacokinetic parameters (CL, V, ka, etc.) for betaine hydrochloride. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
