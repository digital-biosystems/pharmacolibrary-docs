<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L01E&quot;,&quot;href&quot;:&quot;atc/L01E.md&quot;},{&quot;label&quot;:&quot;encorafenib&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Encorafenib_Yang2026_reference&quot;,&quot;label&quot;:&quot;Yang_2026_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_encorafenib/Encorafenib_Yang2026_reference.md&quot;,&quot;status&quot;:&quot;extracted&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

# encorafenib

- **generic name:** encorafenib
- **ATC codes:** `L01EC03`
- **DrugBank:** [DB11718](https://go.drugbank.com/drugs/DB11718) · **PubChem:** [CID 50922675](https://pubchem.ncbi.nlm.nih.gov/compound/50922675)
- **molar mass:** 540.01 g/mol (C22H27ClFN7O4S) — DrugBank
- **groups:** approved, investigational

## About

Encorafenib is a BRAF protein kinase inhibitor used to treat melanoma and colorectal cancer, and has also been studied for lung cancer. It is authorised in the European Union for melanoma and colorectal cancers.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q15409405](https://www.wikidata.org/wiki/Q15409405) and the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## Molecules and molar masses

> The molar mass each model uses to convert mass to molar concentration and to form a metabolite molecule for molecule. Looked up, never estimated: DrugBank for the drug, the paper's own value or the PubChem entry matched to the paper's name for a metabolite.

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| encorafenib | parent | 540.01 | C22H27ClFN7O4S | DrugBank | [50922675](https://pubchem.ncbi.nlm.nih.gov/compound/50922675) | Yang_2026 |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-06 23:41 | 3:14 | 1/0/0 | 1/0/0 | 0/0/0 | 70,098/17,367 | openai / gpt-6-luna | 1 | 0/1 | 1/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> | [Yang_2026_reference](drugs/drug_encorafenib/Encorafenib_Yang2026_reference.md) | ▶ model + simulator | 2-compartment, oral | 6 | Yang DZ et al., Population Pharmacokinetic Modeling of…, Clinical pharmacokinetics (2026) | [10.1007/s40262-025-01608-y](https://doi.org/10.1007/s40262-025-01608-y) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">accepted (caveats)</span> | [Yang_2026_AENZ](drugs/drug_encorafenib/pd_Yang_2026_AENZ.md) | enzyme amount ← encorafenib · indirect response — drug stimulates the production of enzyme amount | model (no simulator) | Yang DZ et al., Population Pharmacokinetic Modeling of…, Clinical pharmacokinetics (2026) | [10.1007/s40262-025-01608-y](https://doi.org/10.1007/s40262-025-01608-y) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=encorafenib) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | blood-brain barrier | `ABCB1` inhibitor/substrate, `ABCG2` inhibitor | DrugBank actor |
| absorption | kidney | `ABCB1` inhibitor/substrate | DrugBank actor |
| absorption | liver | `ABCB1` inhibitor/substrate, `ABCG2` inhibitor | DrugBank actor |
| absorption | mammary gland | `ABCG2` inhibitor | DrugBank actor |
| absorption | placenta | `ABCB1` inhibitor/substrate | DrugBank actor |
| absorption | small intestine | `ABCB1` inhibitor/substrate, `ABCG2` inhibitor | DrugBank actor |
| absorption | testis | `ABCB1` inhibitor/substrate, `ABCG2` inhibitor | DrugBank actor |
| distribution | blood | `ALB` binder | DrugBank actor |
| metabolism | brain | `CYP2D6` inhibitor/substrate | DrugBank actor |
| metabolism | kidney | `CYP3A5` inhibitor | DrugBank actor |
| metabolism | liver | `CYP1A2` inhibitor, `CYP2B6` inducer/inhibitor, `CYP2C19` substrate, `CYP2C8` inhibitor, `CYP2C9` inducer/inhibitor, `CYP2D6` inhibitor/substrate, `CYP3A4` inducer/inhibitor/substrate, `CYP3A5` inhibitor, `CYP3A7` inhibitor, `SLCO1B1` inhibitor, `SLCO1B3` inhibitor, `UGT1A1` inhibitor | DrugBank actor |
| metabolism | small intestine | `CYP3A4` inducer/inhibitor/substrate, `CYP3A5` inhibitor, `UGT1A1` inhibitor | DrugBank actor |
| excretion | bile duct | <sub>named in DrugBank's ADME text</sub> | prose |
| excretion | kidney | `SLC22A2` inhibitor, `SLC22A6` inhibitor, `SLC22A8` inhibitor | DrugBank actor |

<sub>Actors without a tissue in the table: BRAF (inhibitor), CCND1 (inhibitor), LIMK1 (inhibitor), LIMK2 (inhibitor), MAP2K4 (inhibitor), MAPK10 (inhibitor), MAPK8 (inhibitor), MAPK9 (inhibitor), RAF1 (inhibitor), STK36 (inhibitor).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 4 matched, 4 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 1  ·  extracted 1  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full text wanted

_1 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Pétermann_2026.pdf` | Pétermann YJ et al., Population pharmacokinetics of encorafe…, Cancer chemotherapy and pha… (2026) | popPK | 10 | [10.1007/s00280-026-04876-y](https://doi.org/10.1007/s00280-026-04876-y) | [41843134](https://pubmed.ncbi.nlm.nih.gov/41843134) | The human popPK model is described and numeric exposure metrics and half-life are given, but numeric model parameter estimates are not. |

<sub>queue written 2026-10-06T23:38:16.091596+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Kim_2019 | irrelevant | 1 | 0 | This is a review and provides no numeric encorafenib disposition parameters in the supplied evidence. |
| popPK | Pétermann_2026 | relevant | 10 | 3 | The human popPK model is described and numeric exposure metrics and half-life are given, but numeric model parameter estimates are not. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-06 23:38 UTC</sub>
