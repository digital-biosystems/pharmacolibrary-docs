<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;J05A&quot;,&quot;href&quot;:&quot;atc/J05A.md&quot;},{&quot;label&quot;:&quot;tecovirimat&quot;}]"></div>

# tecovirimat

- **generic name:** tecovirimat
- **ATC codes:** `J05AX24`
- **DrugBank:** [DB12020](https://go.drugbank.com/drugs/DB12020) · **PubChem:** [CID 16124688](https://pubchem.ncbi.nlm.nih.gov/compound/16124688)
- **molar mass:** 376.335 g/mol (C19H15F3N2O3) — DrugBank
- **groups:** approved, investigational

## About

Tecovirimat is an antiviral medicine used to treat poxvirus infections, including smallpox, monkeypox, cowpox, and vaccinia. It is authorised in the European Union and also has approved and investigational status elsewhere.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q7692792](https://www.wikidata.org/wiki/Q7692792) and the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 14:06 | 1:18 | 0/0/0 | 0/0/0 | 0/0/0 | 83,271/838 | einfracz / qwen3.8-27b | 7 | 0/7 | 7/0 | 0 |

## popPK records

_not available_

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=tecovirimat) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | blood-brain barrier | `ABCG2` inhibitor | DrugBank actor |
| absorption | liver | `ABCG2` inhibitor | DrugBank actor |
| absorption | mammary gland | `ABCG2` inhibitor | DrugBank actor |
| absorption | small intestine | `ABCG2` inhibitor | DrugBank actor |
| absorption | testis | `ABCG2` inhibitor | DrugBank actor |
| metabolism | liver | `CYP2B6` inducer, `CYP2C19` inhibitor, `CYP2C8` inducer, `CYP3A4` inducer, `UGT1A1` substrate, `UGT1A3` substrate, `UGT1A4` substrate | DrugBank actor |
| metabolism | small intestine | `CYP3A4` inducer, `UGT1A1` substrate | DrugBank actor |
| excretion | bile duct | <sub>named in DrugBank's ADME text</sub> | prose |
| excretion | kidney | <sub>named in DrugBank's ADME text</sub> | prose |

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 11 matched, 11 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Buchholz_2026 | irrelevant | 1 | 0 | The paper is a regulatory review discussing approval strategies and mentions tecovirimat as a case study but contains no quantitative PK parameters or model values. |
| popPK | Grosenbach_2019 | irrelevant | 0 | 0 | The paper describes in vitro antiviral screening methods and does not report pharmacokinetic parameters for tecovirimat. |
| popPK | Higashi-Kuwata_2025 | irrelevant | 0 | 0 | The paper reports in-vitro antiviral efficacy (EC50 values) and cytotoxicity, but does not contain any pharmacokinetic data (clearance, volume, half-life) for tecovirimat. |
| popPK | Luan_2025 | irrelevant | 0 | 0 | The paper is an in-vitro study identifying a new antiviral compound (JCS-2022) and contains no pharmacokinetic data for tecovirimat. |
| popPK | Sudarmaji_2022 | irrelevant | 0 | 0 | The paper is a systematic review of preclinical efficacy studies (survival, viral load) for monkeypox treatments and vaccines, and does not report quantitative population-pharmacokinetic parameters (CL, V, ka, etc.) for tecovirimat. |
| popPK | Zhang_2025 | irrelevant | 0 | 0 | The study focuses on the antiviral efficacy and pharmacokinetics of brincidofovir derivatives, with tecovirimat mentioned only as a clinical background/comparator agent. |
| popPK | Zhang_2026 | irrelevant | 0 | 0 | The paper focuses on the antiviral activity of salinomycin, and tecovirimat is used only as a comparator in combination studies with no PK parameters reported. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
