<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L01E&quot;,&quot;href&quot;:&quot;atc/L01E.md&quot;},{&quot;label&quot;:&quot;vemurafenib&quot;}]"></div>

# vemurafenib

- **generic name:** vemurafenib
- **ATC codes:** `L01EC01`
- **DrugBank:** [DB08881](https://go.drugbank.com/drugs/DB08881) · **PubChem:** [CID 42611257](https://pubchem.ncbi.nlm.nih.gov/compound/42611257)
- **molar mass:** 489.922 g/mol (C23H18ClF2N3O3S) — DrugBank
- **groups:** approved, investigational

## About

Vemurafenib is a BRAF inhibitor used to treat melanoma, including metastatic melanoma, and has also been used for skin cancer, hairy cell leukemia, and Erdheim-Chester disease. It is an approved medicine, authorised in the European Union for melanoma, and is also being investigated for other uses.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q423111](https://www.wikidata.org/wiki/Q423111) and the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 08:54 | 1:56 | 0/0/0 | 2/1/0 | 0/0/0 | 69,260/7,889 | openai / gpt-6-luna | 3 | 1/2 | 3/0 | 0 |

## popPK records

_not available_

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 0.00).">in vitro</span> | [Basu_2017_cell_proliferation](drugs/drug_vemurafenib/pd_Basu_2017_cell_proliferation.md) | cell proliferation ← vemurafenib · inhibition effect | — | Basu R et al., Growth Hormone Receptor Knockdown Sensi…, Hormones & cancer (2017) | [10.1007/s12672-017-0292-7](https://doi.org/10.1007/s12672-017-0292-7) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Hu_2022_CC50](drugs/drug_vemurafenib/pd_Hu_2022_CC50.md) | cytotoxicity ← vemurafenib · stimulation effect | — | Hu B et al., Vemurafenib Inhibits Enterovirus A71 Ge…, Pharmaceuticals (Basel, Swi… (2022) | [10.3390/ph15091067](https://doi.org/10.3390/ph15091067) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Hu_2022_CPE](drugs/drug_vemurafenib/pd_Hu_2022_CPE.md) | cytopathic effect (CPE) inhibition ← vemurafenib · inhibition effect | — | Hu B et al., Vemurafenib Inhibits Enterovirus A71 Ge…, Pharmaceuticals (Basel, Swi… (2022) | [10.3390/ph15091067](https://doi.org/10.3390/ph15091067) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Fallahi-Sichani_2015_apoptosis](drugs/drug_vemurafenib/pd_Fallahi_Sichani_2015_apoptosis.md) | apoptosis ← vemurafenib · direct Emax (saturable) effect | — | Fallahi-Sichani M et al., Systematic analysis of BRAF(V600E) mela…, Molecular systems biology (2015) | [10.15252/msb.20145877](https://doi.org/10.15252/msb.20145877) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Fallahi-Sichani_2015_viability](drugs/drug_vemurafenib/pd_Fallahi_Sichani_2015_viability.md) | viability ← vemurafenib · direct Emax (saturable) effect | — | Fallahi-Sichani M et al., Systematic analysis of BRAF(V600E) mela…, Molecular systems biology (2015) | [10.15252/msb.20145877](https://doi.org/10.15252/msb.20145877) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=vemurafenib) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | blood-brain barrier | `ABCB1` inhibitor/substrate, `ABCG2` inhibitor/substrate | DrugBank actor |
| absorption | kidney | `ABCB1` inhibitor/substrate | DrugBank actor |
| absorption | liver | `ABCB1` inhibitor/substrate, `ABCG2` inhibitor/substrate | DrugBank actor |
| absorption | mammary gland | `ABCG2` inhibitor/substrate | DrugBank actor |
| absorption | placenta | `ABCB1` inhibitor/substrate | DrugBank actor |
| absorption | small intestine | `ABCB1` inhibitor/substrate, `ABCG2` inhibitor/substrate | DrugBank actor |
| absorption | testis | `ABCB1` inhibitor/substrate, `ABCG2` inhibitor/substrate | DrugBank actor |
| distribution | blood | `ALB` substrate, `ORM1` substrate | DrugBank actor |
| distribution | blood-brain barrier | `ABCC1` inhibitor/substrate | DrugBank actor |
| distribution | lung | `ABCC1` inhibitor/substrate | DrugBank actor |
| metabolism | brain | `CYP2D6` inhibitor | DrugBank actor |
| metabolism | liver | `CYP1A2` inhibitor, `CYP2B6` inducer, `CYP2C8` inhibitor, `CYP2C9` inhibitor, `CYP2D6` inhibitor, `CYP3A4` inducer/substrate | DrugBank actor |
| metabolism | small intestine | `CYP3A4` inducer/substrate | DrugBank actor |
| excretion | bile duct | <sub>named in DrugBank's ADME text</sub> | prose |
| excretion | kidney | <sub>named in DrugBank's ADME text</sub> | prose |

<sub>Actors without a tissue in the table: BRAF (inhibitor).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 9 matched, 9 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full text wanted

_2 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Puszkiel_2016.pdf` | Puszkiel A et al., Plasma vemurafenib exposure and pre-tre…, Pharmacological research 11… (2016) | popPK | 10 | [10.1016/j.phrs.2016.06.032](https://doi.org/10.1016/j.phrs.2016.06.032) | [27378568](https://pubmed.ncbi.nlm.nih.gov/27378568) | The study uses a population-PK model for vemurafenib, but no numeric disposition parameter values are provided in the evidence. |
| `Wang_2020.pdf` | Wang H et al., Population Pharmacokinetics of Vemurafe…, Journal of clinical pharmac… (2020) | popPK | 10 | [10.1002/jcph.1617](https://doi.org/10.1002/jcph.1617) | [32476174](https://pubmed.ncbi.nlm.nih.gov/32476174) | A pediatric population-PK model is reported, but numeric disposition parameter values are not provided in the evidence. |

<sub>queue written 2026-10-07T08:53:52.937584+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Basu_2017 | irrelevant | 0 | 0 | This is an in-vitro melanoma drug-resistance study and reports no vemurafenib disposition parameters. |
| popPK | Fallahi-Sichani_2015 | irrelevant | 0 | 0 | This in-vitro signaling study reports no quantitative vemurafenib disposition parameters. |
| popPK | Han_2015 | irrelevant | 0 | 0 | The study models cobimetinib, and reports no quantitative vemurafenib PK parameters. |
| popPK | Hong_2015 | irrelevant | 0 | 0 | This is an in-vitro anticancer study and reports no vemurafenib pharmacokinetic parameters. |
| popPK | Hu_2022 | irrelevant | 0 | 0 | This is an in-vitro antiviral study and reports no quantitative vemurafenib disposition parameters. |
| popPK | Kim_2019 | irrelevant | 1 | 0 | This is a review and provides no numeric vemurafenib disposition parameters in the evidence. |
| popPK | Puszkiel_2016 | relevant | 10 | 0 | The study uses a population-PK model for vemurafenib, but no numeric disposition parameter values are provided in the evidence. |
| popPK | Wang_2020 | relevant | 10 | 1 | A pediatric population-PK model is reported, but numeric disposition parameter values are not provided in the evidence. |
| popPK | Zhang_2017 | irrelevant | 2 | 4 | This is a review that summarizes a population-PK half-life (~57 h) but provides no original quantitative model parameters. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
