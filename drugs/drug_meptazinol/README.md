<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N02A&quot;,&quot;href&quot;:&quot;atc/N02A.md&quot;},{&quot;label&quot;:&quot;meptazinol&quot;}]"></div>

# meptazinol

- **generic name:** meptazinol
- **ATC codes:** `N02AX05`
- **DrugBank:** [DB13478](https://go.drugbank.com/drugs/DB13478) · **PubChem:** not captured
- **molar mass:** 233.355 g/mol (C15H23NO) — DrugBank
- **groups:** experimental

## About

Meptazinol is an opioid compound with pain-relieving (analgesic) and narcotic properties. It is not an approved medicine; it is currently regarded as an experimental drug.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q410618](https://www.wikidata.org/wiki/Q410618) and the WHO ATC classification; not checked by a person.</small>

## Molecules and molar masses

> The molar mass each model uses to convert mass to molar concentration and to form a metabolite molecule for molecule. Looked up, never estimated: DrugBank for the drug, the paper's own value or the PubChem entry matched to the paper's name for a metabolite.

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| meptazinol | parent | 233.355 | C15H23NO | DrugBank | — | Gepts_1987 |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 05:12 | 0:59 | 0/0/1 | 0/0/0 | 0/0/0 | 41,771/2,103 | einfracz / qwen3.8-27b | 2 | 1/1 | 2/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--orange">needs review</span><br><sub>blocking: C6_cl_magnitude failed (ratio None)</sub><br><sub>route_to: `human_review`</sub> | [Gepts_1987_reference](drugs/drug_meptazinol/Meptazinol_Gepts1987_reference.md) | — | 1-compartment (no model) | 5 | Gepts E et al., Pharmacokinetics of intravenously admin…, European journal of anaesth… (1987) | — |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=meptazinol) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| metabolism | blood | `BCHE` inhibitor | DrugBank actor |
| metabolism | liver | `BCHE` inhibitor | DrugBank actor |

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 18 matched, 16 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 1  ·  extracted 0  ·  needs_review 1  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full text wanted

_4 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Gepts_1987.pdf` | Gepts E et al., Pharmacokinetics of intravenously admin…, European journal of anaesth… (1987) | popPK | 10 | not captured | [3582376](https://pubmed.ncbi.nlm.nih.gov/3582376) | The abstract provides explicit numeric values for a three-compartment model, including half-lives, clearance, and volume of distribution. |
| `Rosseel_1975.pdf` | Rosseel MT et al., Meptazinol (Wy 22811), a new analgesic:…, Current medical research an… (1975) | popPK | 5 | [10.1185/03007997509113668](https://doi.org/10.1185/03007997509113668) | [1149487](https://pubmed.ncbi.nlm.nih.gov/1149487) | The paper describes a pharmacokinetic study but the evidence provided contains only qualitative descriptions (e.g., "two compartment open system model") without any specific numeric parameter values like clearance or volume. |
| `Meyer_2019.pdf` | Meyer MJ et al., Opioids as Substrates and Inhibitors of…, Journal of medicinal chemis… (2019) | pd | 5 | [10.1021/acs.jmedchem.9b01301](https://doi.org/10.1021/acs.jmedchem.9b01301) | [31597043](https://www.ncbi.nlm.nih.gov/pubmed/31597043) | metadata signals extractable PD data (IC50) |
| `Spiegel_1984.pdf` | Spiegel K et al., Meptazinol: a novel Mu-1 selective opio…, The Journal of pharmacology… (1984) | pd | 4 | not captured | [6141283](https://www.ncbi.nlm.nih.gov/pubmed/6141283) | metadata signals extractable PD data (IC50) |

<sub>queue written 2026-10-07T05:12:00.608388+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Gabka_1982 | irrelevant | 0 | 0 | The study is a pharmacodynamic dose-response analysis using pain thresholds, not a pharmacokinetic study, and reports no disposition parameters (CL, V, ka, etc.) for meptazinol. |
| PGx | Meyer_2019 | not_relevant | 0 | 0 | The paper identifies meptazinol as an OCT1 substrate in vitro but does not report pharmacokinetic or pharmacodynamic effects in humans based on genotype. |
| popPK | Rosseel_1975 | irrelevant | 5 | 0 | The paper describes a pharmacokinetic study but the evidence provided contains only qualitative descriptions (e.g., "two compartment open system model") without any specific numeric parameter values like clearance or volume. |
| popPK | Wali_1986 | irrelevant | 0 | 0 | The study is an in-vitro pharmacological investigation of cholinergic effects on rat diaphragm and ileum, reporting EC50 and potency data rather than population pharmacokinetic parameters (CL, V, ka). |
| popPK | Xie_2017 | irrelevant | 0 | 0 | The paper is a medicinal chemistry study on meptazinol carbamate derivatives for Alzheimer's disease, reporting in-vitro enzyme kinetics and toxicity, but contains no pharmacokinetic disposition parameters (CL, V, etc.) for meptazinol. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-07 05:12 UTC</sub>
