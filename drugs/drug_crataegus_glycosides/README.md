<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;C01E&quot;,&quot;href&quot;:&quot;atc/C01E.md&quot;},{&quot;label&quot;:&quot;crataegus glycosides&quot;}]"></div>

# crataegus glycosides

- **generic name:** crataegus glycosides
- **ATC codes:** `C01EB04`
- **DrugBank:** not captured · **PubChem:** not captured
- **groups:** not captured

## About

Crataegus glycosides, derived from hawthorn, are cardiac preparations used traditionally for mild heart problems such as heart failure symptoms. They are classified under other cardiac preparations and are used mainly as a herbal remedy, not as a mainstream prescription medicine.

<small>⚠️ **Unverified** — written by `glm-5.3-flash` from general knowledge (no Wikidata entry found) and the WHO ATC classification; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-06 11:38 | 0:44 | 0/0/0 | 0/0/0 | 0/0/0 | 26,030/667 | ollama / qwen3.8:27b-mtp-q8_0 | 3 | 1/2 | 3/0 | 0 |

## popPK records

_not available_

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 0 matched, 10 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full text wanted

_1 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Ma_2010.pdf` | Ma LY et al., The pharmacokinetics of C-glycosyl flav…, Phytomedicine : internation… (2010) | popPK | 9 | [10.1016/j.phymed.2009.12.010](https://doi.org/10.1016/j.phymed.2009.12.010) | [20096549](https://pubmed.ncbi.nlm.nih.gov/20096549) | The study reports quantitative pharmacokinetic parameters (half-life, Tmax, recovery rates) for C-glycosyl flavones (VOG and VOR) from Hawthorn leaf flavonoids in rats. |

<sub>queue written 2026-10-06T11:38:30.719070+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Ammon_1981 | irrelevant | 0 | 0 | no_text gate: only 90 chars of text extracted (&lt; 400) |
| popPK | Boukerouis_2025 | irrelevant | 0 | 0 | The study focuses on fupenzic acid (a triterpene), not crataegus glycosides, and only provides in silico ADMET predictions rather than experimental PK parameters. |
| popPK | Chang_2005 | irrelevant | 1 | 0 | The study investigates the pharmacokinetics of specific hawthorn phenolics (epicatechin, chlorogenic acid, etc.) rather than crataegus glycosides, and no numeric values are provided in the evidence. |
| popPK | Chen_2025 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of ginsenosides and rutin, not crataegus_glycosides. |
| popPK | Chow_2025 | irrelevant | 2 | 3 | The study investigates the absorption of hawthorn leaf flavonoids (a mixture) in rats, not the specific drug entity "crataegus_glycosides" as a single subject, and lacks standard population PK parameters (CL, V) for the defined drug. |
| popPK | Liang_2007 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of vitexin rhamnoside, a specific constituent of hawthorn, rather than the general drug entity crataegus_glycosides. |
| popPK | Liu_2010 | relevant | 9 | 2 | The study reports pharmacokinetic parameters for hyperoside (a crataegus glycoside) in rats, but the specific numeric values are in Table 4 which is not provided in the evidence. |
| popPK | Xu_2022 | irrelevant | 0 | 0 | The paper is a review of hyperoside, not crataegus_glycosides, and contains no original quantitative PK parameters for the target drug. |
| popPK | Zhu_2015 | irrelevant | 0 | 0 | The study analyzes hawthorn leaves flavonoids (rutin, quercetin, etc.), which are distinct from crataegus_glycosides, and no PK parameters for the target drug are reported. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
