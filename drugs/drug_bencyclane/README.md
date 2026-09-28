<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;C04A&quot;,&quot;href&quot;:&quot;atc/C04A.md&quot;},{&quot;label&quot;:&quot;bencyclane&quot;}]"></div>

# bencyclane

- **generic name:** bencyclane
- **ATC codes:** `C04AX11`
- **DrugBank:** [DB13488](https://go.drugbank.com/drugs/DB13488) · **PubChem:** not captured
- **molar mass:** 289.463 g/mol (C19H31NO) — DrugBank
- **groups:** experimental

## About

**Description.** A vasodilator agent found to be effective in a variety of peripheral circulation disorders. It has various other potentially useful pharmacological effects. Its mechanism may involve block of calcium channels.

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-09-28 12:10 | 3:25 | 0/0/0 | 0/0/0 | 0/0/0 | 9,866/1,057 | ollama / qwen3.8:27b-mtp-q8_0 | 0 | 0/0 | 0/0 | 0 |

## popPK records

_not available_

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=bencyclane) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| metabolism | liver | `CYP3A4` substrate | DrugBank actor |
| metabolism | small intestine | `CYP3A4` substrate | DrugBank actor |

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 7 matched, 7 returned
- **screened:** 2  ·  **relevant:** 2
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full text wanted

_2 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Eckard_1985.pdf` | Eckard R et al., Pharmacokinetics of bencyclane after si…, Arzneimittel-Forschung (1985) | popPK | 10 | not captured | [4074419](https://pubmed.ncbi.nlm.nih.gov/4074419) | The text explicitly reports quantitative PK parameters for bencyclane including volume of distribution (~600 l), clearance (~44 l/h), and half-life (~12 h). |
| `Bock_1976.pdf` | Bock PR, A contribution to the pharmacokinetics…, International journal of cl… (1976) | popPK | 8 | not captured | [965131](https://pubmed.ncbi.nlm.nih.gov/965131) | The paper reports qualitative PK parameters (half-life, Tmax, protein binding) for bencyclane but lacks explicit numeric values for clearance (CL) or volume of distribution (V). |

<sub>queue written 2026-09-28T12:10:30.057070+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Auer_1980 | irrelevant | 0 | 0 | The study investigates the pharmacodynamic effect (vasodilation) of bencyclane in cats and does not report any pharmacokinetic parameters such as clearance, volume, or half-life. |
| popPK | Debröczi_1970 | irrelevant | 0 | 0 | no_text gate: only 127 chars of text extracted (&lt; 400) |
| popPK | Herrschaft_1975 | irrelevant | 0 | 0 | The study investigates the hemodynamic effect of bencyclane on cerebral blood flow, not its pharmacokinetic disposition parameters. |
| popPK | Kawamura_1985 | irrelevant | 0 | 0 | The study focuses on the pharmacodynamics of cilostazol, with bencyclane serving only as a comparator agent for potency, and no pharmacokinetic parameters are reported. |
| popPK | Magdalan_2007 | irrelevant | 1 | 0 | The paper is a clinical case report of intoxication that mentions a qualitative property (large volume of distribution) but provides no quantitative pharmacokinetic parameter values. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
