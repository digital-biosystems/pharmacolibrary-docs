<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;A01A&quot;,&quot;href&quot;:&quot;atc/A01A.md&quot;},{&quot;label&quot;:&quot;polynoxylin&quot;}]"></div>

# polynoxylin

- **generic name:** polynoxylin
- **ATC codes:** `A01AB05`, `D01AE05`
- **DrugBank:** not captured · **PubChem:** not captured
- **groups:** not captured

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-04 03:01 | 2:12 | 0/0/0 | 0/0/0 | 0/0/0 | 81,185/2,654 | ollama / qwen3.8:27b-mtp-q8_0 | 10 | 4/6 | 8/2 | 0 |

## popPK records

_not available_

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 1 matched, 51 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Agarkhed_2018 | irrelevant | 0 | 0 | The paper studies the stability of a monoclonal antibody with surfactants and does not involve polynoxylin or pharmacokinetics. |
| popPK | Alfieri_1995 | irrelevant | 0 | 0 | The paper discusses pegaspargase (L-asparaginase), not polynoxylin. |
| popPK | Amédée-Manesme_1992 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of vitamin K1, not polynoxylin. |
| popPK | Badary_1998 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of doxorubicin, not polynoxylin. |
| popPK | Baldy-Moulinier_1975 | irrelevant | 0 | 0 | The study investigates the effects of alfaxalone/alfadolone on cerebral hemodynamics in cats and does not involve polynoxylin or its pharmacokinetics. |
| popPK | Binkhathlan_2017 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of valspodar, not polynoxylin. |
| popPK | Blanchard_1977 | irrelevant | 0 | 0 | The paper investigates the binding of phenolic preservatives to polysorbate 80, not the pharmacokinetics of polynoxylin. |
| popPK | Blenkharn_1985 | irrelevant | 0 | 0 | The paper describes the antimicrobial activity and chemical properties of polynoxylin, not its pharmacokinetic disposition parameters. |
| PD | Blenkharn_1985 | not_relevant | 3 | 2 | The paper reports MIC ranges and qualitative release kinetics but lacks a formal concentration-effect model or derivable PD parameters like Emax or EC50. |
| popPK | Brasseur_1995 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of a naphthalocyanine dye (SiNc 8), not polynoxylin. |
| popPK | Brems_1991 | irrelevant | 0 | 0 | The study investigates the effect of cyclosporine and hydrocortisone on bile flow in dogs and does not involve polynoxylin. |
| popPK | Cherian_2023 | irrelevant | 0 | 0 | The paper is a safety assessment of the cosmetic ingredient Choleth-24 and contains no pharmacokinetic data for polynoxylin. |
| popPK | Chowdhury_2019 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of paclitaxel, not polynoxylin. |
| popPK | Cong_2017 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of praziquantel, not polynoxylin. |
| popPK | Demling_1980 | irrelevant | 0 | 0 | The paper discusses the use of Polysorbate (Tween 80) for burn management and does not contain any pharmacokinetic data for polynoxylin. |
| popPK | Ettinger_1995 | irrelevant | 0 | 0 | no_text gate: only 23 chars of text extracted (&lt; 400) |
| popPK | Fahr_1995 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of cyclosporin A, not polynoxylin. |
| popPK | Gamal_2017 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of amisulpride, not polynoxylin. |
| popPK | Gelderblom_2002 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of cisplatin and topotecan, not polynoxylin. |
| popPK | Gruber_1989 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of cyclosporine, not polynoxylin. |
| popPK | Henningsson_2001 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of paclitaxel, not polynoxylin. |
| popPK | Horiuchi_1992 | irrelevant | 0 | 0 | The study focuses on kidney preservation using perfusate solutions and does not report pharmacokinetic parameters for polynoxylin. |
| popPK | Ishiwata_1995 | irrelevant | 0 | 0 | The provided evidence contains only software metadata and no scientific content regarding polynoxylin or any pharmacokinetic parameters. |
| popPK | Iwashita_1992 | irrelevant | 0 | 0 | The paper studies pyridoxalated hemoglobin-polyoxyethylene (PHP), a blood substitute, not the drug polynoxylin. |
| popPK | Jain_2023 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of sildenafil, not polynoxylin. |
| popPK | Kilic_2018 | irrelevant | 0 | 0 | The paper investigates the phase behavior of lipid mixtures (DSPC/PEG40St) for ultrasound contrast agents and does not report pharmacokinetic parameters for polynoxylin. |
| popPK | Klein_2021 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics and toxicity of paclitaxel, not polynoxylin. |
| popPK | Kleine_1994 | irrelevant | 0 | 0 | The paper studies lipopeptide-polyoxyethylene conjugates as immunological adjuvants, not the pharmacokinetics of the drug polynoxylin. |
| popPK | Lee_2021 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of topotecan, not polynoxylin. |
| popPK | Luo_1995 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of contragestazol (DL-111-IT), not polynoxylin. |
| popPK | Medlock_1984 | irrelevant | 0 | 0 | no_text gate: only 24 chars of text extracted (&lt; 400) |
| popPK | Mittal_2019 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of paclitaxel, not polynoxylin. |
| popPK | Nayakula_2023 | irrelevant | 0 | 0 | The paper studies curcumin formulations, not polynoxylin. |
| popPK | Ríos_2024 | irrelevant | 0 | 0 | The paper studies the biodegradability of a surfactant (PGE-OE17), not the pharmacokinetics of the drug polynoxylin. |
| popPK | Sparreboom_1996 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of paclitaxel, not polynoxylin. |
| popPK | Speeg_1992 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of colchicine and cyclosporine, not polynoxylin. |
| popPK | Sun_2018 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of osthole, not polynoxylin. |
| popPK | Talarico_2000 | irrelevant | 0 | 0 | The paper describes the chemical characterization of a hemoglobin conjugate (PHP) and does not report pharmacokinetic parameters for polynoxylin. |
| popPK | Tibell_1995 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of Cyclosporin A, not polynoxylin. |
| popPK | Tong_2023 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of gentiopicroside, not polynoxylin. |
| popPK | Trapani_2000 | irrelevant | 0 | 0 | The paper is a review of propofol, not polynoxylin, and contains no data for the target drug. |
| popPK | Voci_2021 | irrelevant | 0 | 0 | The paper studies gliadin nanoparticles and polyoxyethylene (2) oleyl ether, not the drug polynoxylin, and contains no pharmacokinetic data. |
| popPK | Voeller_1986 | irrelevant | 0 | 0 | no_text gate: only 24 chars of text extracted (&lt; 400) |
| popPK | Warisnoicharoen_2000 | irrelevant | 0 | 0 | The paper is a physicochemical study on microemulsion phase behavior and does not involve the drug polynoxylin or any pharmacokinetic parameters. |
| popPK | Weerapol_2024 | irrelevant | 0 | 0 | The paper investigates the molecular dynamics and stability of spearmint oil nanoemulsions, not the pharmacokinetics of polynoxylin. |
| popPK | Woodburn_1994 | irrelevant | 0 | 0 | The paper studies the effect of Cremophor EL on lipoproteins and porphyrin clearance, not the pharmacokinetics of polynoxylin. |
| popPK | Wostry_2020 | irrelevant | 0 | 0 | The paper investigates the formulation of naproxen co-amorphous systems and does not involve polynoxylin or report any pharmacokinetic parameters. |
| popPK | Zang_2018 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of paclitaxel, not polynoxylin. |
| popPK | Zhang_2019 | irrelevant | 0 | 0 | no_text gate: extracted text is mostly non-alphabetic (garbled or binary) |
| popPK | Zhang_2022 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of isoliquiritigenin (ISL), not polynoxylin. |
| popPK | Zheng_2023 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of Panax notoginseng saponins (ginsenosides Rb1, Rg1, R1) in beagle dogs, not the drug polynoxylin. |
| popPK | unknown_1992 | irrelevant | 0 | 0 | no_text gate: only 24 chars of text extracted (&lt; 400) |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
