<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;A04A&quot;,&quot;href&quot;:&quot;atc/A04A.md&quot;},{&quot;label&quot;:&quot;granisetron&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Granisetron_Addelman1990_reference&quot;,&quot;label&quot;:&quot;Addelman_1990_reference&quot;,&quot;href&quot;:&quot;drugs/drug_granisetron/Granisetron_Addelman1990_reference.md&quot;,&quot;status&quot;:&quot;needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Granisetron_Li2023_reference&quot;,&quot;label&quot;:&quot;Li_2023_reference&quot;,&quot;href&quot;:&quot;drugs/drug_granisetron/Granisetron_Li2023_reference.md&quot;,&quot;status&quot;:&quot;rejected&quot;,&quot;css&quot;:&quot;pk-badge--red&quot;,&quot;here&quot;:false}]"></div>

# granisetron

- **generic name:** granisetron
- **ATC codes:** `A04AA02`
- **DrugBank:** [DB00889](https://go.drugbank.com/drugs/DB00889)
- **groups:** approved, investigational

## About

**Description.** A serotonin receptor (5HT-3 selective) antagonist that has been used as an antiemetic and antinauseant for cancer chemotherapy patients.

**Indication.** For the prevention of nausea and vomiting associated with initial and repeat courses of emetogenic cancer therapy (including high dose cisplatin), postoperation, and radiation (including total body irradiation and daily fractionated abdominal radiation).

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-09-18 12:13 | 1:05 | 0/1/1 | 0/0/0 | 0/0/0 | 26,413/1,234 | ollama / qwen3.8:27b-mtp-q8_0 | 1 | 0/1 | 1/0 | 0 |

## popPK records

| status | detail | citation | doi |
|---|---|---|---|
| <span class="pk-badge pk-badge--orange">needs review</span><br><sub>blocking: disposition incomplete — only clearance/elimination extracted — the engineer ne…</sub><br><sub>route_to: `human_review`</sub> | [Addelman_1990_reference](drugs/drug_granisetron/Granisetron_Addelman1990_reference.md) | Addelman M et al., Phase I/II trial of granisetron: a nove…, Journal of clinical oncolog… (1990) | [10.1200/JCO.1990.8.2.337](https://doi.org/10.1200/JCO.1990.8.2.337) |
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: C9 clearance/volume outside physiological window (implausible magnitude — unit/…</sub><br><sub>route_to: `human_review`</sub> | [Li_2023_reference](drugs/drug_granisetron/Granisetron_Li2023_reference.md) | Li J et al., Population pharmacokinetic analysis of…, Frontiers in pharmacology (2023) | [10.3389/fphar.2023.1154026](https://doi.org/10.3389/fphar.2023.1154026) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=granisetron) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | liver | <sub>“…oral bioavailability is reduced to about 60% as a result of first pass metabolism.…”</sub> | prose |
| metabolism | liver | `CYP3A4` substrate | DrugBank actor |
| metabolism | lung | `CYP1A1` inhibitor/substrate | DrugBank actor |
| metabolism | small intestine | `CYP1A1` inhibitor/substrate, `CYP3A4` substrate | DrugBank actor |
| excretion | bile duct | <sub>“…is excreted as metabolites, 48% in the urine and 38% in the feces.…”</sub> | prose |
| excretion | kidney | <sub>“…emainder of the dose is excreted as metabolites, 48% in the urine and 38% in the feces.…”</sub> | prose |

<sub>Actors without a tissue in the table: HTR3A (target), HTR3B (target).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 40 matched, 18 returned
- **screened:** 3  ·  **relevant:** 2
- **records:** 2  ·  extracted 0  ·  needs_review 1  ·  rejected 1  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full text wanted

_2 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Addelman_1990.pdf` | Addelman M et al., Phase I/II trial of granisetron: a nove…, Journal of clinical oncolog… (1990) | popPK | 9 | [10.1200/JCO.1990.8.2.337](https://doi.org/10.1200/JCO.1990.8.2.337) | [2153767](https://pubmed.ncbi.nlm.nih.gov/2153767) | The paper reports quantitative pharmacokinetic parameters (AUC, clearance) for granisetron in a human study, with values explicitly listed in the text. |
| `Howell_2009.pdf` | Howell J et al., Pharmacokinetics of a granisetron trans…, Journal of oncology pharmac… (2009) | popPK | 9 | [10.1177/1078155209104063](https://doi.org/10.1177/1078155209104063) | [19304880](https://pubmed.ncbi.nlm.nih.gov/19304880) | The paper reports a population PK study for granisetron with some numeric values (Cmax, t1/2, AUC) in the abstract, but specific compartmental parameters (CL, V, Q) are not explicitly listed in the provided text. |

<sub>queue written 2026-09-18T12:13:08.379485+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Artaiz_1995 | irrelevant | 0 | 0 | The study focuses on the pharmacological effects of VA21B7 in animal models, using granisetron only as a comparator agent without reporting any pharmacokinetic parameters. |
| popPK | Howell_2009 | relevant | 9 | 4 | The paper reports a population PK study for granisetron with some numeric values (Cmax, t1/2, AUC) in the abstract, but specific compartmental parameters (CL, V, Q) are not explicitly listed in the provided text. |
| popPK | Jarvis_2016 | irrelevant | 0 | 0 | The study is a mechanistic electrophysiology and binding study of 5-HT3 receptor inhibitors, using granisetron only as a fluorescent ligand for competition assays, and reports no pharmacokinetic parameters for granisetron. |
| popPK | Shingaki_2016 | irrelevant | 1 | 0 | Granisetron is used as a comparator antiemetic to assess gastrointestinal motility via FDG-PET, not as the subject drug for PK parameter estimation. |
| popPK | Thompson_2024 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of cisplatin, with granisetron serving only as a co-administered antiemetic comparator rather than the subject drug. |
| PD | Thompson_2024 | not_relevant | 0 | 0 | The paper reports a PK/PD model for cisplatin nephrotoxicity, not for granisetron; granisetron is only mentioned as a covariate (antiemetic type) affecting cisplatin PK parameters. |
| popPK | Thompson_2025 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of cisplatin (platinum), with granisetron serving only as a co-administered antiemetic comparator rather than the subject drug. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-09-18 12:13 UTC</sub>
