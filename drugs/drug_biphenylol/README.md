<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;D08A&quot;,&quot;href&quot;:&quot;atc/D08A.md&quot;},{&quot;label&quot;:&quot;biphenylol&quot;}]"></div>

# biphenylol

- **generic name:** biphenylol
- **ATC codes:** `D08AE06`
- **DrugBank:** [DB13734](https://go.drugbank.com/drugs/DB13734) · **PubChem:** not captured
- **groups:** investigational

## About

Biphenylol (2-phenylphenol) is a phenol derivative used as an antiseptic and disinfectant for the skin. It is classed as investigational and is also considered a carcinogen, so it is not an established marketed medicine.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q209467](https://www.wikidata.org/wiki/Q209467) and the WHO ATC classification; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 23:08 | 0:10 | 0/0/0 | 0/1/0 | 0/0/0 | 7,986/580 | ollama / glm-5.3-flash | 0 | 0/0 | 0/0 | 0 |

## popPK records

_not available_

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--species" title="The paper reports both human and animal data (from keyword rules on the title and abstract — no LLM answer yet).">human + animal</span> | [Ramamoorthy_1997_ER_binding](drugs/drug_biphenylol/pd_Ramamoorthy_1997_ER_binding.md) | [3H]E2 displacement from mouse uterine estrogen receptor (competitive binding) ← biphenylol (HO-PCB3/HO-PCB4 equimolar mixture) · inhibition effect | — | Ramamoorthy K et al., Additive estrogenic activities of a bin…, Toxicology and applied phar… (1997) | [10.1006/taap.1997.8281](https://doi.org/10.1006/taap.1997.8281) |

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 5 matched, 5 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full text wanted

_2 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Malmberg_2004.pdf` | Malmberg T et al., Pharmacokinetics of two major hydroxyla…, Xenobiotica; the fate of fo… (2004) | popPK | 10 | [10.1080/00498250410001713078](https://doi.org/10.1080/00498250410001713078) | [15277017](https://pubmed.ncbi.nlm.nih.gov/15277017) | PK parameters (half-life, V, CL, AUC) for two biphenylol PCB metabolites are reported directly in the abstract after IV dosing in rats. |
| `Matthews_2000.pdf` | Matthews J et al., Differential binding affinities of PCBs…, Toxicological sciences : an… (2000) | pd | 4 | [10.1093/toxsci/53.2.326](https://doi.org/10.1093/toxsci/53.2.326) | [10696781](https://www.ncbi.nlm.nih.gov/pubmed/10696781) | metadata signals extractable PD data (IC50) |

<sub>queue written 2026-10-07T23:08:42.155607+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Matthews_2000 | irrelevant | 0 | 0 | no_text gate: only 237 chars of text extracted (&lt; 400) |
| PD | Matthews_2000 | not_relevant | 0 | 0 | The paper focuses on the binding affinities of PCBs and HO-PCBs to estrogen receptors, not on the pharmacodynamics of biphenylol. |
| popPK | Nair-Menon_1999 | irrelevant | 0 | 0 | In vitro cytotoxicity study of a biphenylol-related PCB metabolite in murine splenocytes; no pharmacokinetic parameters for biphenylol. |
| popPK | Ramamoorthy_1997 | irrelevant | 0 | 0 | The paper investigates the estrogenic activity and receptor binding of biphenylol derivatives, not their pharmacokinetic disposition parameters. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
