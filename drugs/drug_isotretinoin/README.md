<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;D10A&quot;,&quot;href&quot;:&quot;atc/D10A.md&quot;},{&quot;label&quot;:&quot;isotretinoin&quot;}]"></div>

# isotretinoin

- **generic name:** isotretinoin
- **ATC codes:** `D10AD04`, `D10BA01`
- **DrugBank:** [DB00982](https://go.drugbank.com/drugs/DB00982) · **PubChem:** [CID 5282379](https://pubchem.ncbi.nlm.nih.gov/compound/5282379)
- **molar mass:** 300.4351 g/mol (C20H28O2) — DrugBank
- **groups:** approved, investigational

## About

Isotretinoin is a retinoid used to treat acne, and has also been used for conditions such as rosacea, leukemia, and neuroblastoma. It is an approved medicine, widely used for severe acne, but carries a boxed warning because it is a known teratogen.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q287029](https://www.wikidata.org/wiki/Q287029) and the WHO ATC classification; not checked by a person.</small>

## Molecules and molar masses

> The molar mass each model uses to convert mass to molar concentration and to form a metabolite molecule for molecule. Looked up, never estimated: DrugBank for the drug, the paper's own value or the PubChem entry matched to the paper's name for a metabolite.

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| isotretinoin | parent | 300.435 | C20H28O2 | DrugBank | [5282379](https://pubchem.ncbi.nlm.nih.gov/compound/5282379) | Nulman_1998, Veal_2007 |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 07:23 | 0:50 | 0/1/1 | 0/0/0 | 0/0/0 | 30,471/3,080 | einfracz / qwen3.8-27b | 1 | 1/0 | 1/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--orange">needs review</span><br><sub>blocking: C5 dimensioned parameter(s) without a unit: Q88 — no SI value to build from</sub><br><sub>route_to: `human_review`</sub> | [Veal_2007_reference](drugs/drug_isotretinoin/Isotretinoin_Veal2007_reference.md) | — | 1-compartment (no model) | 4 | Veal GJ et al., Pharmacokinetics and metabolism of 13-c…, British journal of cancer (2007) | [10.1038/sj.bjc.6603554](https://doi.org/10.1038/sj.bjc.6603554) |
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: no distribution volume and no clearance/elimination — not a compartmental popPK…</sub><br><sub>route_to: `human_review`</sub> | [Nulman_1998_reference](drugs/drug_isotretinoin/Isotretinoin_Nulman1998_reference.md) | — | 1-compartment (no model) | 1 | Nulman I et al., Steady-state pharmacokinetics of isotre…, Journal of clinical pharmac… (1998) | [10.1002/j.1552-4604.1998.tb04388.x](https://doi.org/10.1002/j.1552-4604.1998.tb04388.x) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=isotretinoin) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | small intestine | <sub>named in DrugBank's ADME text</sub> | prose |
| distribution | blood | `ALB` binder | DrugBank actor |
| metabolism | liver | `CYP3A4` substrate | DrugBank actor |
| metabolism | small intestine | `CYP3A4` substrate | DrugBank actor |
| excretion | bile duct | <sub>named in DrugBank's ADME text</sub> | prose |
| excretion | kidney | <sub>named in DrugBank's ADME text</sub> | prose |

<sub>Actors without a tissue in the table: RARA (other/unknown), RARA (target), RARG (target).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 5 matched, 5 returned
- **screened:** 2  ·  **relevant:** 2
- **records:** 2  ·  extracted 0  ·  needs_review 1  ·  rejected 1  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full text wanted

_2 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Veal_2013.pdf` | Veal GJ et al., Adaptive dosing approaches to the indiv…, Clinical cancer research :… (2013) | popPK | 10 | [10.1158/1078-0432.CCR-12-2225](https://doi.org/10.1158/1078-0432.CCR-12-2225) | [23087409](https://pubmed.ncbi.nlm.nih.gov/23087409) | The paper reports a population pharmacokinetic model for isotretinoin in humans, but the specific quantitative parameter values (CL, V, etc.) are not listed in the provided abstract evidence, only Cmax observations. |
| `Nulman_1998.pdf` | Nulman I et al., Steady-state pharmacokinetics of isotre…, Journal of clinical pharmac… (1998) | popPK | 9 | [10.1002/j.1552-4604.1998.tb04388.x](https://doi.org/10.1002/j.1552-4604.1998.tb04388.x) | [9807973](https://pubmed.ncbi.nlm.nih.gov/9807973) | Reports steady-state PK parameters (half-life) for isotretinoin in a two-compartment model, but detailed compartmental values (CL, V) are not explicitly listed in the provided text. |

<sub>queue written 2026-10-07T07:22:30.968677+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Kisaalita_1996 | irrelevant | 0 | 0 | The study is an in-vitro cytotoxicity assessment of isotretinoin in murine neuroblastoma cells and does not report pharmacokinetic disposition parameters. |
| popPK | Veal_2013 | relevant | 10 | 3 | The paper reports a population pharmacokinetic model for isotretinoin in humans, but the specific quantitative parameter values (CL, V, etc.) are not listed in the provided abstract evidence, only Cmax observations. |
| popPK | Yadav_2022 | irrelevant | 1 | 0 | The study focuses on in vitro transcriptional regulation of enzymes/transporters and a clinical biomarker for DDI, lacking quantitative PK disposition parameters (CL, V, etc.) for isotretinoin. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-07 07:22 UTC</sub>
