<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;V08B&quot;,&quot;href&quot;:&quot;atc/V08B.md&quot;},{&quot;label&quot;:&quot;barium sulfate without suspending agents&quot;}]"></div>

# barium sulfate without suspending agents

- **generic name:** barium sulfate without suspending agents
- **ATC codes:** `V08BA02`
- **DrugBank:** not captured · **PubChem:** not captured
- **groups:** not captured

## About

Barium sulfate is an X-ray contrast medium used to visualise the digestive tract during imaging examinations. It is a widely used diagnostic imaging agent, given orally or rectally before X-ray procedures.

<small>⚠️ **Unverified** — written by `glm-5.3-flash` from general knowledge (no Wikidata entry found) and the WHO ATC classification; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 17:26 | 3:13 | 0/0/0 | 0/0/0 | 0/0/0 | 35,670/4,075 | openai / gpt-6-luna | 4 | 3/1 | 4/0 | 0 |

## popPK records

_not available_

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 38 matched, 17 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full text wanted

_1 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Takahashi_1987.pdf` | Takahashi S et al., Long-term retention of 133Ba in the rat…, Radiation research (1987) | popPK | 8 | not captured | [3588840](https://pubmed.ncbi.nlm.nih.gov/3588840) | Rat tracheal retention of administered barium sulfate particles is quantified with clearance half-times reported in the evidence. |

<sub>queue written 2026-10-07T17:26:11.662276+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Casteel_1998 | irrelevant | 0 | 0 | The study measures gastric emptying after a barium bolus, not quantitative pharmacokinetic disposition parameters. |
| popPK | Hady_1983 | irrelevant | 0 | 0 | Barium sulfate particles are used as a mucociliary test agent, and no quantitative pharmacokinetic parameters are reported. |
| popPK | Hsu_2020 | irrelevant | 0 | 0 | This review reports no quantitative pharmacokinetic parameters for barium sulfate. |
| popPK | Ishikawa_1991 | irrelevant | 0 | 0 | Barium sulfate was used for renal angiography, with no pharmacokinetic parameters reported. |
| popPK | Killingsworth_1987 | irrelevant | 0 | 0 | Barium sulfate was used for bronchography, with no pharmacokinetic parameters reported. |
| popPK | Konduru_2017 | irrelevant | 1 | 0 | This rat nanoparticle-corona study reports no quantitative BaSO4 pharmacokinetic parameters; lung-clearance figures are background only. |
| popPK | Laukkarinen_2007 | irrelevant | 0 | 0 | This is a swine stent study, not a pharmacokinetic study of barium sulfate; no disposition parameters are reported. |
| popPK | MORROW_1964 | irrelevant | 0 | 0 | no_text gate: only 60 chars of text extracted (&lt; 400) |
| popPK | Moda_2018 | irrelevant | 0 | 0 | Barium sulfate is only a swallowing-imaging contrast agent, and no pharmacokinetic disposition parameters are reported. |
| popPK | Nakashima_2006 | irrelevant | 0 | 0 | Barium sulfate was used only as an in vitro contrast medium, with no pharmacokinetic disposition parameters reported. |
| popPK | Normann_1965 | irrelevant | 0 | 0 | Barium sulfate is used as a serum-adsorption reagent, and no pharmacokinetic parameters for it are reported. |
| popPK | Peatfield_1983 | irrelevant | 0 | 0 | This cat airway secretion study reports no pharmacokinetic disposition parameters for barium sulfate. |
| popPK | Rodrigues-Grande_1987 | irrelevant | 0 | 0 | This is a dog lung-clearance microscopy study, not a pharmacokinetic study reporting disposition parameters for barium sulfate. |
| popPK | Scheeren_2014 | irrelevant | 0 | 0 | Barium sulfate is used as a swallowing-study contrast agent, with no pharmacokinetic disposition parameters reported. |
| popPK | Schwickert_1993 | irrelevant | 0 | 0 | This is a human diagnostic imaging study, not a pharmacokinetic study reporting drug disposition parameters. |
| popPK | Schwickert_1995 | irrelevant | 0 | 0 | This is a human esophageal transit study, not a pharmacokinetic study reporting disposition parameters for barium sulfate. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
