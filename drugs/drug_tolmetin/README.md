<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;M01A&quot;,&quot;href&quot;:&quot;atc/M01A.md&quot;},{&quot;label&quot;:&quot;tolmetin&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Tolmetin_Selley1975_reference&quot;,&quot;label&quot;:&quot;Selley_1975_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_tolmetin/Tolmetin_Selley1975_reference.md&quot;,&quot;status&quot;:&quot;extracted&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

# tolmetin

- **generic name:** tolmetin
- **ATC codes:** `M01AB03`, `M02AA21`
- **DrugBank:** [DB00500](https://go.drugbank.com/drugs/DB00500) · **PubChem:** [CID 5509](https://pubchem.ncbi.nlm.nih.gov/compound/5509)
- **molar mass:** 257.2845 g/mol (C15H15NO3) — DrugBank
- **groups:** approved

## About

Tolmetin is a non-steroidal anti-inflammatory drug used to treat osteoarthritis, rheumatoid arthritis, and juvenile rheumatoid arthritis. It is an approved medicine, available as oral antiinflammatory products and topical preparations for joint and muscular pain.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q3992411](https://www.wikidata.org/wiki/Q3992411) and the WHO ATC classification; not checked by a person.</small>

## Molecules and molar masses

> The molar mass each model uses to convert mass to molar concentration and to form a metabolite molecule for molecule. Looked up, never estimated: DrugBank for the drug, the paper's own value or the PubChem entry matched to the paper's name for a metabolite.

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| tolmetin | parent | 257.284 | C15H15NO3 | DrugBank | [5509](https://pubchem.ncbi.nlm.nih.gov/compound/5509) | Migdalof_1976, Sabater_1992, Selley_1975 |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 01:29 | 0:22 | 1/2/0 | 0/0/1 | 0/0/0 | 26,941/2,331 | einfracz / qwen3.8-27b | 0 | 0/0 | 0/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> | [Selley_1975_reference](drugs/drug_tolmetin/Tolmetin_Selley1975_reference.md) | ▶ model + simulator | 1-compartment, oral | 3 | Selley ML et al., Pharmacokinetic studies of tolmetin in…, Clinical pharmacology and t… (1975) | [10.1002/cpt1975175599](https://doi.org/10.1002/cpt1975175599) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">rat</span><br><sub>blocking: no distribution volume and no clearance/elimination — not a compartmental popPK…</sub><br><sub>route_to: `human_review`</sub> | [Migdalof_1976_reference](drugs/drug_tolmetin/Tolmetin_Migdalof1976_reference.md) | — | 1-compartment (no model) | 1 | Migdalof BH et al., The time course of tolmetin and its met…, Drug metabolism and disposi… (1976) | — |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">rat</span><br><sub>blocking: no distribution volume and no clearance/elimination — not a compartmental popPK…</sub><br><sub>blocking: C5 dimension mismatch on a structural parameter</sub><br><sub>route_to: `human_review`</sub> | [Sabater_1992_reference](drugs/drug_tolmetin/Tolmetin_Sabater1992_reference.md) | — | 1-compartment (no model) | 2 | Sabater J et al., Pharmacokinetic study of tolmetin in th…, Arzneimittel-Forschung (1992) | — |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">rat</span> | [Flores-Murrieta_1998_antinociceptive_effect](drugs/drug_tolmetin/pd_Flores_Murrieta_1998_antinociceptive_effect.md) | antinociceptive effect ← tolmetin · indirect response — drug inhibits the production of antinociceptive effect | model (no simulator) | Flores-Murrieta FJ et al., Pharmacokinetic-pharmacodynamic modelin…, Journal of pharmacokinetics… (1998) | [10.1023/a:1023273100270](https://doi.org/10.1023/a:1023273100270) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=tolmetin) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | small intestine | <sub>named in DrugBank's ADME text</sub> | prose |
| distribution | blood | `ALB` unknown | DrugBank actor |
| metabolism | kidney | <sub>named in DrugBank's ADME text</sub> | prose |
| excretion | kidney | `SLC22A6` inhibitor | DrugBank actor |

<sub>Actors without a tissue in the table: MPO (inhibitor), PTGS1 (inhibitor), PTGS2 (inhibitor), TDO2 (inhibitor).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 6 matched, 6 returned
- **screened:** 3  ·  **relevant:** 3
- **records:** 3  ·  extracted 1  ·  needs_review 0  ·  rejected 2  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full text wanted

_5 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Sabater_1992.pdf` | Sabater J et al., Pharmacokinetic study of tolmetin in th…, Arzneimittel-Forschung (1992) | popPK | 10 | not captured | [1418060](https://pubmed.ncbi.nlm.nih.gov/1418060) | The study is a pharmacokinetic analysis of tolmetin in rats reporting a compartmental model and specific parameters like bioavailability and absorption rate (K01), though other values like clearance and volume are not explicitly listed in the provided text. |
| `Selley_1975.pdf` | Selley ML et al., Pharmacokinetic studies of tolmetin in…, Clinical pharmacology and t… (1975) | popPK | 10 | [10.1002/cpt1975175599](https://doi.org/10.1002/cpt1975175599) | [1126116](https://pubmed.ncbi.nlm.nih.gov/1126116) | The study reports quantitative PK parameters for tolmetin in humans, including elimination rate constant, half-life, and volume of distribution. |
| `Migdalof_1976.pdf` | Migdalof BH et al., The time course of tolmetin and its met…, Drug metabolism and disposi… (1976) | popPK | 9 | not captured | [10146](https://pubmed.ncbi.nlm.nih.gov/10146) | The study reports quantitative PK parameters (half-life) for tolmetin in rats and mice using a one-compartment model, but specific values for clearance and volume are not explicitly listed in the evidence text. |
| `Flores-Murrieta_1998.pdf` | Flores-Murrieta FJ et al., Pharmacokinetic-pharmacodynamic modelin…, Journal of pharmacokinetics… (1998) | popPK | 6 | [10.1023/a:1023273100270](https://doi.org/10.1023/a:1023273100270) | [10205770](https://pubmed.ncbi.nlm.nih.gov/10205770) | The study reports population PK modeling of tolmetin in rats, but the abstract only provides PD parameters (IC50) and lacks specific numeric PK disposition values like CL or V. |
| `Squires_1993.pdf` | Squires RF et al., Indomethacin/ibuprofen-like anti-inflam…, Molecular pharmacology (1993) | pd | 4 | not captured | [8388990](https://www.ncbi.nlm.nih.gov/pubmed/8388990) | metadata signals extractable PD data (EC50) |

<sub>queue written 2026-10-07T01:29:32.237650+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Flores-Murrieta_1998 | relevant | 6 | 2 | The study reports population PK modeling of tolmetin in rats, but the abstract only provides PD parameters (IC50) and lacks specific numeric PK disposition values like CL or V. |
| popPK | Squires_1993 | irrelevant | 0 | 0 | The study is an in-vitro receptor binding mechanistic study where tolmetin is tested as a comparator agent, and no pharmacokinetic parameters are reported. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-07 01:29 UTC</sub>
