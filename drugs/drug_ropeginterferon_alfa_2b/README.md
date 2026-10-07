<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L03A&quot;,&quot;href&quot;:&quot;atc/L03A.md&quot;},{&quot;label&quot;:&quot;ropeginterferon alfa-2b&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;RopeginterferonAlfa2b_Zhu2021_reference&quot;,&quot;label&quot;:&quot;Zhu_2021_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_ropeginterferon_alfa_2b/RopeginterferonAlfa2b_Zhu2021_reference.md&quot;,&quot;status&quot;:&quot;extracted&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

# ropeginterferon alfa-2b

- **generic name:** ropeginterferon alfa-2b
- **ATC codes:** `L03AB15`
- **DrugBank:** [DB15119](https://go.drugbank.com/drugs/DB15119) · **PubChem:** not captured
- **groups:** approved, investigational

## About

Ropeginterferon alfa-2b is a long-acting pegylated interferon used to treat polycythemia vera. It is authorised in the European Union and remains investigational for other uses.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q99754007](https://www.wikidata.org/wiki/Q99754007) and the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## Molecules and molar masses

> The molar mass each model uses to convert mass to molar concentration and to form a metabolite molecule for molecule. Looked up, never estimated: DrugBank for the drug, the paper's own value or the PubChem entry matched to the paper's name for a metabolite.

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| ropeginterferon_alfa_2b | metabolite | 447.529 | C20H37N3O8 | PubChem | [86278347](https://pubchem.ncbi.nlm.nih.gov/compound/86278347) | Zhu_2021 |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-06 23:05 | 0:59 | 1/0/0 | 1/0/0 | 0/0/0 | 59,321/7,097 | einfracz / qwen3.8-27b | 2 | 0/2 | 2/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> | [Zhu_2021_reference](drugs/drug_ropeginterferon_alfa_2b/RopeginterferonAlfa2b_Zhu2021_reference.md) | ▶ model + simulator | 1-compartment, oral | 6 (+1 cov.) | Zhu M et al., Population Pharmacokinetics of Ropegint…, Frontiers in pharmacology (2021) | [10.3389/fphar.2021.673492](https://doi.org/10.3389/fphar.2021.673492) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">accepted (caveats)</span> | [Qin_2025_HCT](drugs/drug_ropeginterferon_alfa_2b/pd_Qin_2025_HCT.md) | hematocrit ← ropeg · indirect response — drug inhibits the production of hematocrit | model (no simulator) | Qin A et al., Population Pharmacokinetics-Pharmacodyn…, Pharmacology research & per… (2025) | [10.1002/prp2.70109](https://doi.org/10.1002/prp2.70109) |
| <span class="pk-badge pk-badge--green">accepted (caveats)</span> | [Qin_2025_PLT](drugs/drug_ropeginterferon_alfa_2b/pd_Qin_2025_PLT.md) | platelet ← ropeg · indirect response — drug inhibits the production of platelet | model (no simulator) | Qin A et al., Population Pharmacokinetics-Pharmacodyn…, Pharmacology research & per… (2025) | [10.1002/prp2.70109](https://doi.org/10.1002/prp2.70109) |
| <span class="pk-badge pk-badge--green">accepted (caveats)</span> | [Qin_2025_WBC](drugs/drug_ropeginterferon_alfa_2b/pd_Qin_2025_WBC.md) | white blood cell ← ropeg · indirect response — drug inhibits the production of white blood cell | model (no simulator) | Qin A et al., Population Pharmacokinetics-Pharmacodyn…, Pharmacology research & per… (2025) | [10.1002/prp2.70109](https://doi.org/10.1002/prp2.70109) |
| <span class="pk-badge pk-badge--orange">needs review</span> | [Qin_2025_ALT](drugs/drug_ropeginterferon_alfa_2b/pd_Qin_2025_ALT.md) | increased ALT ← ropeg · direct linear effect | model (no simulator) | Qin A et al., Population Pharmacokinetics-Pharmacodyn…, Pharmacology research & per… (2025) | [10.1002/prp2.70109](https://doi.org/10.1002/prp2.70109) |
| <span class="pk-badge pk-badge--orange">needs review</span> | [Qin_2025_AST](drugs/drug_ropeginterferon_alfa_2b/pd_Qin_2025_AST.md) | increased AST ← ropeg · direct linear effect | model (no simulator) | Qin A et al., Population Pharmacokinetics-Pharmacodyn…, Pharmacology research & per… (2025) | [10.1002/prp2.70109](https://doi.org/10.1002/prp2.70109) |
| <span class="pk-badge pk-badge--orange">needs review</span> | [Qin_2025_CHR](drugs/drug_ropeginterferon_alfa_2b/pd_Qin_2025_CHR.md) | complete hematologic response ← ropeg · direct Emax (saturable) effect | model (no simulator) | Qin A et al., Population Pharmacokinetics-Pharmacodyn…, Pharmacology research & per… (2025) | [10.1002/prp2.70109](https://doi.org/10.1002/prp2.70109) |
| <span class="pk-badge pk-badge--orange">needs review</span> | [Qin_2025_JAK2V617F_allele_burden_reduction](drugs/drug_ropeginterferon_alfa_2b/pd_Qin_2025_JAK2V617F_allele_burden_reduction.md) | JAK2V617F allele burden reduction ← ropeg · direct linear effect | model (no simulator) | Qin A et al., Population Pharmacokinetics-Pharmacodyn…, Pharmacology research & per… (2025) | [10.1002/prp2.70109](https://doi.org/10.1002/prp2.70109) |
| <span class="pk-badge pk-badge--orange">needs review</span> | [Qin_2025_JAK2V617F_allele_burden_reduction_2](drugs/drug_ropeginterferon_alfa_2b/pd_Qin_2025_JAK2V617F_allele_burden_reduction_2.md) | JAK2V617F allele burden reduction ← ropeg · direct linear effect | model (no simulator) | Qin A et al., Population Pharmacokinetics-Pharmacodyn…, Pharmacology research & per… (2025) | [10.1002/prp2.70109](https://doi.org/10.1002/prp2.70109) |
| <span class="pk-badge pk-badge--orange">needs review</span> | [Qin_2025_anemia](drugs/drug_ropeginterferon_alfa_2b/pd_Qin_2025_anemia.md) | anemia ← ropeg · direct linear effect | model (no simulator) | Qin A et al., Population Pharmacokinetics-Pharmacodyn…, Pharmacology research & per… (2025) | [10.1002/prp2.70109](https://doi.org/10.1002/prp2.70109) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=ropeginterferon_alfa_2b) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| metabolism | brain | `CYP2D6` inhibitor | DrugBank actor |
| metabolism | liver | `CYP1A2` inhibitor, `CYP2A6` inhibitor, `CYP2D6` inhibitor | DrugBank actor |
| excretion | liver | <sub>named in DrugBank's ADME text</sub> | prose |

<sub>Actors without a tissue in the table: IFNAR1 (binder).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 6 matched, 6 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 1  ·  extracted 1  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full text wanted

_2 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Huang_2021.pdf` | Huang YW et al., Pharmacokinetics and Pharmacodynamics o…, Advances in therapy (2021) | popPK | 6 | [10.1007/s12325-021-01863-y](https://doi.org/10.1007/s12325-021-01863-y) | [34328630](https://pubmed.ncbi.nlm.nih.gov/34328630) | Reports PK parameters (Tmax, half-life) but lacks compartmental values like CL or V. |
| `Huang_2022.pdf` | Huang YW et al., Novel long-acting ropeginterferon alfa-…, British journal of clinical… (2022) | popPK | 6 | [10.1111/bcp.15176](https://doi.org/10.1111/bcp.15176) | [34907578](https://pubmed.ncbi.nlm.nih.gov/34907578) | The study reports standard non-compartmental PK metrics (Cmax, Tmax, AUC) for ropeginterferon alfa-2b in humans, but does not explicitly provide compartmental parameters (CL, V, half-life) in the provided text. |

<sub>queue written 2026-10-06T23:04:29.861220+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Huang_2021 | relevant | 6 | 4 | Reports PK parameters (Tmax, half-life) but lacks compartmental values like CL or V. |
| popPK | Huang_2022 | relevant | 6 | 4 | The study reports standard non-compartmental PK metrics (Cmax, Tmax, AUC) for ropeginterferon alfa-2b in humans, but does not explicitly provide compartmental parameters (CL, V, half-life) in the provided text. |
| popPK | Qin_2024 | irrelevant | 2 | 0 | The paper reports exposure-efficacy/safety relationships but does not provide quantitative pharmacokinetic disposition parameters (CL, V, ka, etc.) for ropeginterferon alfa-2b. |
| popPK | Qin_2025 | relevant | 10 | 3 | The paper is a population PK study of ropeginterferon_alfa_2b, but the numeric parameter estimates (Table 4) are not included in the provided evidence, only referred to. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-06 23:04 UTC</sub>
