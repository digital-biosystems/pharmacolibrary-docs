<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L01E&quot;,&quot;href&quot;:&quot;atc/L01E.md&quot;},{&quot;label&quot;:&quot;idelalisib&quot;}]"></div>

# idelalisib

- **generic name:** idelalisib
- **ATC codes:** `L01EM01`, `L01XX47`
- **DrugBank:** [DB09054](https://go.drugbank.com/drugs/DB09054) · **PubChem:** [CID 11625818](https://pubchem.ncbi.nlm.nih.gov/compound/11625818)
- **molar mass:** 415.432 g/mol (C22H18FN7O) — DrugBank
- **groups:** approved, investigational

## About

Idelalisib is an anticancer medicine used to treat certain B-cell blood cancers, including chronic lymphocytic leukemia and several types of lymphoma. It is authorised in the European Union for non-Hodgkin lymphoma and chronic lymphocytic leukemia, and carries a boxed warning.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q5908266](https://www.wikidata.org/wiki/Q5908266) and the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 01:32 | 0:51 | 0/0/0 | 1/0/0 | 0/0/0 | 51,377/3,892 | openai / gpt-6-luna | 3 | 0/3 | 3/0 | 0 |

## popPK records

_not available_

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="The paper reports both human and animal data (from the LLM relevance screen, p(non-human) 0.80).">human + animal</span> | [McLeod_2019_CD63](drugs/drug_idelalisib/pd_McLeod_2019_CD63.md) | CD63 activation ← Idelalisib · inhibition effect | — | McLeod RL et al., Characterizing Pharmacokinetic-Pharmaco…, The Journal of pharmacology… (2019) | [10.1124/jpet.118.252551](https://doi.org/10.1124/jpet.118.252551) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=idelalisib) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | blood-brain barrier | `ABCB1` inhibitor/substrate, `ABCG2` substrate | DrugBank actor |
| absorption | kidney | `ABCB1` inhibitor/substrate | DrugBank actor |
| absorption | liver | `ABCB1` inhibitor/substrate, `ABCG2` substrate | DrugBank actor |
| absorption | mammary gland | `ABCG2` substrate | DrugBank actor |
| absorption | placenta | `ABCB1` inhibitor/substrate | DrugBank actor |
| absorption | small intestine | `ABCB1` inhibitor/substrate, `ABCG2` substrate | DrugBank actor |
| absorption | testis | `ABCB1` inhibitor/substrate, `ABCG2` substrate | DrugBank actor |
| metabolism | kidney | `CYP3A5` inhibitor/substrate | DrugBank actor |
| metabolism | liver | `AOX1` substrate, `CYP2B6` inducer, `CYP2C19` inhibitor, `CYP2C8` inhibitor, `CYP3A4` inducer/inhibitor/substrate, `CYP3A5` inhibitor/substrate, `CYP3A7` inhibitor/substrate, `SLCO1B1` inhibitor, `SLCO1B3` inhibitor, `UGT1A4` inhibitor/substrate | DrugBank actor |
| metabolism | small intestine | `CYP3A4` inducer/inhibitor/substrate, `CYP3A5` inhibitor/substrate | DrugBank actor |
| excretion | bile duct | <sub>named in DrugBank's ADME text</sub> | prose |
| excretion | kidney | <sub>named in DrugBank's ADME text</sub> | prose |

<sub>Actors without a tissue in the table: CYP3A43 (inhibitor), CYP3A43 (substrate), PIK3CD (inhibitor).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 6 matched, 6 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full text wanted

_1 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Jin_2016.pdf` | Jin F et al., Population pharmacokinetic modeling of…, Cancer chemotherapy and pha… (2016) | popPK | 10 | [10.1007/s00280-015-2891-8](https://doi.org/10.1007/s00280-015-2891-8) | [26645408](https://pubmed.ncbi.nlm.nih.gov/26645408) | A human population-PK model is reported, but numeric parameter values are not present in the provided evidence. |

<sub>queue written 2026-10-07T01:31:41.697863+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Jin_2016 | relevant | 10 | 1 | A human population-PK model is reported, but numeric parameter values are not present in the provided evidence. |
| popPK | McLeod_2019 | irrelevant | 1 | 0 | Idelalisib is mentioned as a clinical reference and for an in-vitro IC50, but no numeric disposition parameters are provided. |
| popPK | Montillo_2019 | irrelevant | 0 | 0 | This human trial reports quality-of-life outcomes, not quantitative pharmacokinetic disposition parameters. |
| popPK | Ramanathan_2016 | irrelevant | 2 | 1 | This review mentions a population-PK model but provides no numeric disposition parameters. |
| popPK | Zimmerman_2023 | irrelevant | 0 | 0 | This is an in-vitro pharmacodynamic study and reports no idelalisib disposition parameters. |
| popPK | Zimmerman_2023_2 | irrelevant | 0 | 0 | This is an in vitro/ex vivo mechanistic study and reports no quantitative idelalisib disposition parameters. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
