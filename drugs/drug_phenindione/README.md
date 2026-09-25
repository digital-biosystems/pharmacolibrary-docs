<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;B01A&quot;,&quot;href&quot;:&quot;atc/B01A.md&quot;},{&quot;label&quot;:&quot;phenindione&quot;}]"></div>

# phenindione

- **generic name:** phenindione
- **ATC codes:** `B01AA02`
- **DrugBank:** [DB00498](https://go.drugbank.com/drugs/DB00498)
- **groups:** approved, investigational

## About

**Description.** An indandione that has been used as an anticoagulant. Phenindione has actions similar to warfarin, but it is now rarely employed because of its higher incidence of severe adverse effects. (From Martindale, The Extra Pharmacopoeia, 30th ed, p234)

**Indication.** For the treatment of pulmonary embolism, cardiomyopathy, atrial fibrillation and flutter, cerebral embolism, mural thrombosis, and thrombophili. Also used for anticoagulant prophylaxis.

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-09-06 05:17 | 0:40 | 0/0/0 | 0/1/0 | 0/0/0 | 1,300/292 | ollama / qwen3.8:27b-mtp-q8_0 | 11 | 2/9 | 11/0 | 0 |

## popPK records

_not available_

## Pharmacodynamics (PD)

| status | detail | citation | doi |
|---|---|---|---|
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.407). The first reading is what the record holds.">cross-check: disputed</span> | [Comets_2012](drugs/drug_phenindione/pd_Comets_2012_INR.md) | Comets E et al., Pharmacokinetic and pharmacodynamic var…, Clinical pharmacology and t… (2012) | [10.1038/clpt.2011.309](https://doi.org/10.1038/clpt.2011.309) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=phenindione) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | small intestine | <sub>“…Absorbed slowly from the gastrointestinal tract.…”</sub> | prose |
| metabolism | liver | <sub>“…Hepatic.…”</sub> | prose |

<sub>Actors without a tissue in the table: VKORC1 (inhibitor).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 7 matched, 5 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Beaty_1982 | irrelevant | 0 | 0 | The paper is a virology study on La Crosse virus in mice and does not involve phenindione or pharmacokinetics. |
| popPK | Benet_1993 | irrelevant | 0 | 0 | The paper focuses on the pharmacokinetics of etodolac, not phenindione. |
| popPK | Chakravarty_2020 | irrelevant | 0 | 0 | The paper is a simulation study on control strategies for propofol anesthesia and does not involve phenindione. |
| popPK | Chen_2025 | irrelevant | 0 | 0 | The paper is a clinical trial protocol for inspiratory muscle training in tracheostomized patients and does not involve phenindione or pharmacokinetic parameters. |
| popPK | Cheng_2026 | irrelevant | 0 | 0 | The study reports pharmacokinetic parameters for intravenous immunoglobulin (IgG), not phenindione. |
| popPK | Comets_2012 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of fluindione, not phenindione, which is only mentioned as a related drug class member. |
| popPK | Darville_2021 | irrelevant | 0 | 0 | The paper is a review of immune mechanisms in pelvic inflammatory disease and does not contain any pharmacokinetic data for phenindione. |
| popPK | Dumas_2019 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of immunoglobulin (Ig20Gly), not phenindione. |
| PGx | Espana_2017 | not_relevant | 0 | 0 | The study investigates the role of ABC transporters in cell models but does not report any genetic variants or genotypes affecting pharmacokinetic or pharmacodynamic parameters. |
| popPK | FREMONT_1964 | irrelevant | 0 | 0 | The provided evidence contains only the title of a pharmacodynamics study, with no quantitative pharmacokinetic parameters or data for phenindione. |
| PD | FREMONT_1964 | not_relevant | 0 | 0 | The provided text is only a title and does not contain the full text or any numeric data, parameters, or curves required to extract a PD relationship. |
| popPK | Freedman_1994 | irrelevant | 0 | 0 | The paper is a review of drug interactions with oral anticoagulants and does not report original quantitative pharmacokinetic parameters for phenindione. |
| PD | Freedman_1994 | not_relevant | 1 | 0 | The text is a general review of drug interactions with oral anticoagulants and mentions phenindione only as a class example without providing any specific pharmacodynamic data, exposure-response curves, or numeric PD parameters. |
| popPK | Gong_2022 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of six specific compounds (e.g., salvianolic acid B, paeoniflorin) in a traditional Chinese medicine preparation, and phenindione is not mentioned or studied. |
| popPK | Gotardo_2011 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of praziquantel (PZQ) in mice, not phenindione. |
| popPK | Haj-Yehia_1989 | irrelevant | 0 | 0 | The study focuses on valpromide derivatives and does not involve phenindione. |
| popPK | Herrero_2022 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of piperacillin-tazobactam, not phenindione. |
| popPK | Hu_2021 | irrelevant | 0 | 0 | The paper is a clinical study on myocardial injury biomarkers (cTnT, CK-MB) after cardiac surgery and does not involve phenindione or its pharmacokinetics. |
| popPK | Kanegane_2026 | irrelevant | 0 | 0 | The study evaluates the pharmacokinetics of hyaluronidase-facilitated subcutaneous immunoglobulin (HyQvia), not phenindione. |
| popPK | Koppitz_2017 | irrelevant | 0 | 0 | The paper is a study protocol for a nursing intervention in dementia patients and contains no pharmacokinetic data or mention of phenindione. |
| popPK | Kriván_2022 | irrelevant | 0 | 0 | The study evaluates the pharmacokinetics of IVIg (BT595), not phenindione. |
| popPK | Li_2021 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of immunoglobulin (Ig20Gly), not phenindione. |
| popPK | Narita_1989 | irrelevant | 0 | 0 | The paper is an immunohistologic study of pseudorabies virus in pigs and contains no pharmacokinetic data for phenindione. |
| popPK | Pogonowska_1975 | irrelevant | 0 | 0 | The study investigates analogs (2-p-methoxy- and 2-p-bromophenylindandione-1,3) rather than phenindione itself, and no numeric values for phenindione are provided. |
| popPK | Serlin_1979 | irrelevant | 1 | 0 | Phenindione is only a comparator drug in a cimetidine interaction study, and no quantitative PK parameters for phenindione are reported. |
| popPK | Suzuki_2021 | irrelevant | 0 | 0 | The study focuses on the intratumor pharmacokinetics of trastuzumab deruxtecan (T-DXd) in mouse xenografts and does not involve phenindione. |
| popPK | Tabor_2024 | irrelevant | 0 | 0 | The paper investigates plasma biomarkers for traumatic brain injury and does not involve phenindione or pharmacokinetic parameters. |
| popPK | Trent_2020 | irrelevant | 0 | 0 | The paper is a clinical study on the clearance of infectious agents (Mycoplasma genitalium and Trichomonas vaginalis) in PID patients and does not involve the pharmacokinetics of phenindione. |
| popPK | Verstuyft_2012 | irrelevant | 0 | 0 | The study focuses on fluindione and acenocoumarol, not phenindione. |
| PD | Verstuyft_2012 | not_relevant | 0 | 0 | The paper focuses on fluindione and acenocoumarol, not phenindione. |
| popPK | Wasserman_2017 | irrelevant | 0 | 0 | The study evaluates the pharmacokinetics of intravenous immunoglobulin (Gammaplex), not phenindione. |
| popPK | Whelton_1980 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of doxycycline and cephalothin, not phenindione. |
| popPK | Yan_2022 | irrelevant | 0 | 0 | The paper is a clinical study on cholesterol abnormalities in children and does not involve phenindione or pharmacokinetic parameters. |
| popPK | Zhou_2022 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of morinidazole, not phenindione. |
| popPK | de_1979 | relevant | 10 | 0 | The paper describes a pharmacokinetic study of phenindione (2-phenyl-1,3-indandione) in rats with a compartmental model, but no numeric parameter values are present in the provided evidence. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
