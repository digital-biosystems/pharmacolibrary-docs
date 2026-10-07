<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L01X&quot;,&quot;href&quot;:&quot;atc/L01X.md&quot;},{&quot;label&quot;:&quot;panobinostat&quot;}]"></div>

# panobinostat

- **generic name:** panobinostat
- **ATC codes:** `L01XH03`
- **DrugBank:** [DB06603](https://go.drugbank.com/drugs/DB06603) · **PubChem:** [CID 6918837](https://pubchem.ncbi.nlm.nih.gov/compound/6918837)
- **molar mass:** 349.434 g/mol (C21H23N3O2) — DrugBank
- **groups:** approved, investigational

## About

Panobinostat is an anticancer medicine (a histone deacetylase inhibitor) used to treat multiple myeloma. It is authorised in the European Union as an antineoplastic agent, and is also being investigated for other uses.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q7131441](https://www.wikidata.org/wiki/Q7131441) and the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## Molecules and molar masses

> The molar mass each model uses to convert mass to molar concentration and to form a metabolite molecule for molecule. Looked up, never estimated: DrugBank for the drug, the paper's own value or the PubChem entry matched to the paper's name for a metabolite.

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| panobinostat | parent | 349.434 | C21H23N3O2 | DrugBank | [6918837](https://pubchem.ncbi.nlm.nih.gov/compound/6918837) | Savelieva_2015 |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-06 22:36 | 0:56 | 0/0/1 | 0/0/0 | 0/0/0 | 128,791/4,696 | einfracz / qwen3.8-27b | 4 | 0/4 | 3/1 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--orange">needs review</span><br><sub>blocking: disposition incomplete — only clearance/elimination extracted — the engineer ne…</sub><br><sub>route_to: `human_review`</sub> | [Savelieva_2015_reference](drugs/drug_panobinostat/Panobinostat_Savelieva2015_reference.md) | — | 1-compartment (no model) | 1 (+3 cov.) | Savelieva M et al., Population pharmacokinetics of intraven…, European journal of clinica… (2015) | [10.1007/s00228-015-1846-7](https://doi.org/10.1007/s00228-015-1846-7) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=panobinostat) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | blood-brain barrier | `ABCB1` substrate | DrugBank actor |
| absorption | kidney | `ABCB1` substrate | DrugBank actor |
| absorption | liver | `ABCB1` substrate | DrugBank actor |
| absorption | placenta | `ABCB1` substrate | DrugBank actor |
| absorption | small intestine | `ABCB1` substrate | DrugBank actor |
| absorption | testis | `ABCB1` substrate | DrugBank actor |
| metabolism | brain | `CYP2D6` inhibitor | DrugBank actor |
| metabolism | liver | `CYP2D6` inhibitor, `CYP3A4` substrate | DrugBank actor |
| metabolism | small intestine | `CYP3A4` substrate | DrugBank actor |

<sub>Actors without a tissue in the table: HDAC1 (inhibitor).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 6 matched, 6 returned
- **screened:** 3  ·  **relevant:** 3
- **records:** 1  ·  extracted 0  ·  needs_review 1  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full text wanted

_1 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Sharma_2015.pdf` | Sharma S et al., A phase I, open-label, multicenter stud…, Cancer chemotherapy and pha… (2015) | popPK | 8 | [10.1007/s00280-014-2612-8](https://doi.org/10.1007/s00280-014-2612-8) | [25377157](https://pubmed.ncbi.nlm.nih.gov/25377157) | The study is a Phase I PK study of panobinostat in humans, reporting AUC, renal clearance, and metabolite ratios, which are quantitative disposition parameters, though specific CL/F and V values are likely in the full text or tables not fully detailed here. |

<sub>queue written 2026-10-06T22:35:48.083449+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Peer_2018 | irrelevant | 0 | 0 | The study models the pharmacokinetics and pharmacodynamics of belinostat, with panobinostat mentioned only as a comparator agent. |
| popPK | Shen_2025 | irrelevant | 0 | 0 | This is a mechanistic high-throughput screening study for SIRT1 up-regulators, not a pharmacokinetic study, and does not report quantitative PK parameters for panobinostat. |
| popPK | Wei_2014 | irrelevant | 0 | 0 | This is an in vitro mechanistic study of HIV latency reversal where panobinostat is used as a comparator agent, and no pharmacokinetic parameters (CL, V, etc.) are reported. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-06 22:35 UTC</sub>
