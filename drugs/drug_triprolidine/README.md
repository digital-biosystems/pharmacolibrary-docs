<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;R06A&quot;,&quot;href&quot;:&quot;atc/R06A.md&quot;},{&quot;label&quot;:&quot;triprolidine&quot;}]"></div>

# triprolidine

- **generic name:** triprolidine
- **ATC codes:** `R06AX07`
- **DrugBank:** [DB00427](https://go.drugbank.com/drugs/DB00427) · **PubChem:** [CID 5282443](https://pubchem.ncbi.nlm.nih.gov/compound/5282443)
- **molar mass:** 278.3914 g/mol (C19H22N2) — DrugBank
- **groups:** approved

## About

Triprolidine is an antihistamine (H1 antagonist) used for allergic conditions such as atopic dermatitis and giant papillary conjunctivitis. It is an approved drug, classified among other antihistamines for systemic use, and is typically found in combination cold and allergy medicines.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q417654](https://www.wikidata.org/wiki/Q417654) and the WHO ATC classification; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 21:46 | 0:46 | 0/0/0 | 0/0/0 | 0/0/0 | 32,468/1,196 | einfracz / qwen3.8-27b | 0 | 0/0 | 0/0 | 0 |

## popPK records

_not available_

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=triprolidine) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | small intestine | <sub>named in DrugBank's ADME text</sub> | prose |
| distribution | blood | `ALB` binder/regulator | DrugBank actor |

<sub>Actors without a tissue in the table: HRH1 (target).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 14 matched, 14 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full text wanted

_1 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Al-Gadi_1985.pdf` | Al-Gadi M et al., Characterization of histamine receptors…, British journal of pharmaco… (1985) | pd | 4 | [10.1111/j.1476-5381.1985.tb11087.x](https://doi.org/10.1111/j.1476-5381.1985.tb11087.x) | [2994788](https://www.ncbi.nlm.nih.gov/pubmed/2994788) | metadata signals extractable PD data (EC50) |

<sub>queue written 2026-10-07T21:46:51.490931+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Al-Gadi_1985 | irrelevant | 0 | 0 | no_text gate: only 127 chars of text extracted (&lt; 400) |
| popPK | Arrang_1985 | irrelevant | 0 | 0 | The study is a pharmacological investigation of betahistine's receptor actions, and triprolidine is used only as a comparative H1-antagonist for Ki determination, with no pharmacokinetic data reported. |
| popPK | Bell_2000 | irrelevant | 0 | 0 | Triprolidine is used solely as a pharmacological tool compound (H1 antagonist) in an in vitro electrophysiology study, with no pharmacokinetic parameters reported. |
| popPK | Claro_1986 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of receptor pharmacology using triprolidine as a competitive antagonist, not a pharmacokinetic study of triprolidine disposition. |
| popPK | Crawford_1992 | irrelevant | 0 | 0 | The study investigates histamine receptor signaling mechanisms in bovine cells and uses triprolidine only as a qualitative antagonist, providing no pharmacokinetic data. |
| popPK | Gespach_1989 | irrelevant | 0 | 0 | The study is a pharmacological investigation of histamine receptor binding and adenylate cyclase activity, not a pharmacokinetic study, and triprolidine is used only as a reference antagonist. |
| popPK | Greenman_1995 | irrelevant | 0 | 0 | The study is a chronic oncogenicity/toxicology trial in mice that reports histopathological findings and body weight changes, but contains no quantitative pharmacokinetic parameters such as clearance, volume of distribution, or half-life. |
| popPK | Lach_1993 | irrelevant | 0 | 0 | The study is an in vitro pharmacology paper on guinea pig lung contraction where triprolidine is used only as an antagonist tool to rule out a mechanism, not a PK subject. |
| popPK | Santos_1995 | irrelevant | 0 | 0 | The study is an in vitro electrophysiology experiment on snail neurons using triprolidine as a pharmacological antagonist, not a pharmacokinetic study. |
| popPK | Sarem-Aslani_1991 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic study of gastric mucosal cells using triprolidine as an antagonist probe, reporting receptor Ki values but no pharmacokinetic disposition parameters (CL, V, etc.). |
| popPK | Sharif_1996 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic pharmacology study characterizing histamine receptors in conjunctival cells, not a pharmacokinetic study of triprolidine. |
| popPK | Tzeng_2018 | irrelevant | 0 | 0 | The study examines spinal anesthesia potency (ED50) and duration in rats, not the systemic pharmacokinetic disposition parameters (CL, V, ka) required for the target. |
| popPK | Xu_1987 | irrelevant | 0 | 0 | The study is an in vitro receptor pharmacology investigation where triprolidine is used solely as a functional antagonist to identify H1 receptors, with no pharmacokinetic parameters reported. |
| popPK | Zawilska_2002 | irrelevant | 0 | 0 | The paper is an in-vitro receptor binding study in chick cerebral cortex where triprolidine is used only as a comparative antagonist to characterize histamine receptors, not a pharmacokinetic study. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
