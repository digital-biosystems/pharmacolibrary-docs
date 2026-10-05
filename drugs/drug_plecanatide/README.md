<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;A06A&quot;,&quot;href&quot;:&quot;atc/A06A.md&quot;},{&quot;label&quot;:&quot;plecanatide&quot;}]"></div>

# plecanatide

- **generic name:** plecanatide
- **ATC codes:** `A06AX07`
- **DrugBank:** [DB13170](https://go.drugbank.com/drugs/DB13170) · **PubChem:** [CID 70693500](https://pubchem.ncbi.nlm.nih.gov/compound/70693500)
- **molar mass:** 1681.89 g/mol (C65H104N18O26S4) — DrugBank
- **groups:** approved

## About

**Description.** Plecanatide is a drug approved in January 2017 by the FDA for the treatment of chronic idiopathic constipation (CIC). It should not be used in children less than six years of age, and should be avoided in patients six years to 18 years of age

**Indication.** Plecanatide is indicated for the treatment of chronic idiopathic constipation (CIC) and irritable bowel syndrome with constipation (IBS-C) in adult patients.[L35044]

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-04 17:43 | 0:58 | 0/0/0 | 0/0/0 | 0/0/0 | 37,982/497 | ollama / qwen3.8:27b-mtp-q8_0 | 5 | 1/4 | 4/1 | 0 |

## popPK records

_not available_

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=plecanatide) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| metabolism | small intestine | <sub>“…metabolized in the GI tract…”</sub> | prose |

<sub>Actors without a tissue in the table: GUCY2C (target).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 14 matched, 19 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Bassotti_2019 | irrelevant | 1 | 0 | The paper is a narrative review of plecanatide for constipation that discusses pharmacokinetics qualitatively but does not report any quantitative PK parameter values. |
| PD | Bassotti_2019 | not_relevant | 1 | 0 | The text is a narrative review summarizing clinical efficacy and safety without reporting specific numeric pharmacodynamic parameters (e.g., Emax, EC50) or exposure-response data. |
| popPK | Dodeja_2026 | irrelevant | 0 | 0 | The paper is a general review of study designs for drug secretion in human milk and does not report specific pharmacokinetic parameters for plecanatide. |
| PD | Dodeja_2026 | not_relevant | 0 | 0 | The paper is a review on drug secretion in human milk and mentions plecanatide only as an example of a drug with supportive lactation data, without reporting any pharmacodynamic or exposure-response parameters. |
| popPK | Giragossian_2015 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of PF-05231023 (an FGF21 analog), not plecanatide. |
| popPK | Ho_2023 | irrelevant | 0 | 0 | The paper investigates the epigenetic mechanisms of FGF21 in iPSC-derived neurons and does not contain any pharmacokinetic data for plecanatide. |
| popPK | Samanta_2021 | irrelevant | 0 | 0 | The paper is a review of guanylin peptides and GC-C signaling mechanisms, mentioning plecanatide only as a therapeutic analog without reporting any pharmacokinetic parameters. |
| popPK | Shailubhai_2013 | irrelevant | 2 | 0 | The study reports no measurable systemic absorption and provides no quantitative PK parameters (CL, V, t1/2) for plecanatide. |
| PD | Shailubhai_2013 | not_relevant | 2 | 1 | The study reports qualitative PD trends (stool frequency/consistency) across doses but explicitly states it was not powered for statistical analysis and provides no numeric PD parameters or dose-response curve. |
| popPK | Sharma_2019 | irrelevant | 0 | 0 | The paper is a review article that summarizes clinical trials and mechanism of action but does not report original quantitative pharmacokinetic parameters (CL, V, ka, etc.) for plecanatide. |
| PD | Sharma_2019 | not_relevant | 2 | 1 | The paper is a narrative review that summarizes clinical trial outcomes (response rates, adverse events) and qualitative pharmacodynamic observations (e.g., "BSFS scores plateau") but does not provide numeric PD parameters (Emax, EC50) or extractable concentration-effect curves. |
| popPK | Weng_2015 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of PF-05231023 (an FGF21 analogue), not plecanatide. |
| popPK | Weng_2018 | irrelevant | 0 | 0 | The paper reports pharmacokinetic parameters for PF-06645849 (an FGF21 analogue), not plecanatide. |
| popPK | Zhang_2020 | irrelevant | 0 | 0 | The paper is a pharmacodynamic meta-analysis of bowel movement frequency, not a pharmacokinetic study, and contains no PK parameters for plecanatide. |
| popPK | Zhao_2024 | irrelevant | 0 | 0 | The paper studies the pharmacodynamics of PF-05231023 (an FGF21 analog) in mice, not the pharmacokinetics of plecanatide. |
| popPK | unknown_2019 | irrelevant | 0 | 0 | The paper is about prucalopride, not plecanatide. |
| PD | unknown_2019 | not_relevant | 0 | 0 | The paper discusses prucalopride, not plecanatide, and does not report any pharmacodynamic or exposure-response data for the target drug. |
| popPK | unknown_2019_2 | irrelevant | 0 | 0 | The evidence consists only of a table title regarding chronic idiopathic constipation and contains no pharmacokinetic data or specific information on plecanatide. |
| PD | unknown_2019_2 | not_relevant | 0 | 0 | The text is a title for a table of drugs and contains no data, analysis, or numeric parameters. |
| popPK | unknown_2019_3 | irrelevant | 0 | 0 | no_text gate: only 32 chars of text extracted (&lt; 400) |
| PD | unknown_2019_3 | not_relevant | 0 | 0 | The provided text is only a title/header for conference proceedings and contains no data, analysis, or parameters regarding plecanatide or any pharmacodynamic relationship. |
| popPK | unknown_2020 | irrelevant | 0 | 0 | The provided evidence is only a title for a review on IBS drugs, containing no pharmacokinetic data or specific information on plecanatide. |
| PD | unknown_2020 | not_relevant | 1 | 0 | The text is a title for a general review of drugs for IBS and does not contain specific pharmacodynamic data, exposure-response analysis, or numeric parameters for plecanatide. |
| popPK | unknown_2022 | irrelevant | 0 | 0 | The paper is about tenapanor, not plecanatide, and contains no PK data for the subject drug. |
| PD | unknown_2022 | not_relevant | 0 | 0 | The provided text is a title for a paper on Tenapanor, not Plecanatide, and contains no pharmacodynamic data or parameters. |
| popPK | unknown_2023 | irrelevant | 0 | 0 | The paper describes a device (vibrating capsule) for constipation and does not report pharmacokinetic parameters for plecanatide. |
| PD | unknown_2023 | not_relevant | 0 | 0 | The paper describes a device (vibrating capsule) for constipation, not the pharmacological drug plecanatide, and contains no exposure-response or dose-response data. |
| popPK | unknown_2025 | irrelevant | 0 | 0 | The provided evidence is a title for a review on irritable bowel syndrome drugs, containing no pharmacokinetic data or specific mention of plecanatide. |
| PD | unknown_2025 | not_relevant | 1 | 0 | The text is a title for a general review of drugs for IBS and does not contain specific pharmacodynamic data, exposure-response analysis, or numeric parameters for plecanatide. |
| popPK | unknown_2025_2 | irrelevant | 0 | 0 | The evidence is a comparison chart for IBS-C drugs and contains no pharmacokinetic data or numeric parameters for plecanatide. |
| PD | unknown_2025_2 | not_relevant | 0 | 0 | The text is a title for a comparison chart and contains no data, analysis, or numeric parameters regarding plecanatide's pharmacodynamics. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
