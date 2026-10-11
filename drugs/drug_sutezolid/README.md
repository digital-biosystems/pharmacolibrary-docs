<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;Sutezolid&quot;}]"></div>

# Sutezolid

- **generic name:** Sutezolid
- **ATC codes:** not captured
- **DrugBank:** [DB11905](https://go.drugbank.com/drugs/DB11905) · **PubChem:** [CID 465951](https://pubchem.ncbi.nlm.nih.gov/compound/465951)
- **molar mass:** 353.41 g/mol (C16H20FN3O3S) — DrugBank
- **groups:** investigational

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-09 10:00 | 2:45 | 0/0/0 | 1/2/0 | 0/0/0 | 64,064/2,646 | einfracz / qwen3.8-27b | 2 | 1/1 | 2/0 | 0 |

## popPK records

_not available_

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> | [Heinrich_2025_MGIT_TTP](drugs/drug_sutezolid/pd_Heinrich_2025_MGIT_TTP.md) | change in mycobacterial load measured by time to positivity using the mycobacterial growth indicator tube system ← sutezolid · direct linear effect | — | Heinrich N et al., Sutezolid in combination with bedaquili…, The Lancet. Infectious dise… (2025) | [10.1016/S1473-3099(25)00213-0](https://doi.org/10.1016/S1473-3099(25)00213-0) |
| <span class="pk-badge pk-badge--red">rejected</span> | [Wang_2026_bactericidal_activity](drugs/drug_sutezolid/pd_Wang_2026_bactericidal_activity.md) | bactericidal activity · inhibition effect | — | Wang MS et al., [Annual progress in chemotherapy for tu…, Zhonghua jie he he hu xi za… (2026) | [10.3760/cma.j.cn112147-20251020-00648](https://doi.org/10.3760/cma.j.cn112147-20251020-00648) |
| <span class="pk-badge pk-badge--red">rejected</span> | [Zhu_2014_WBA](drugs/drug_sutezolid/pd_Zhu_2014_WBA.md) | whole-blood bactericidal activity ← sutezolid (U-480) and its major metabolite (U-603) · direct sigmoid Emax (Hill) effect | — | Zhu T et al., Population pharmacokinetic/pharmacodyna…, Antimicrobial agents and ch… (2014) | [10.1128/AAC.01920-13](https://doi.org/10.1128/AAC.01920-13) |

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 11 matched, 11 returned
- **screened:** 2  ·  **relevant:** 1
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full text wanted

_2 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Zhu_2014.pdf` | Zhu T et al., Population pharmacokinetic/pharmacodyna…, Antimicrobial agents and ch… (2014) | popPK | 9 | [10.1128/AAC.01920-13](https://doi.org/10.1128/AAC.01920-13) | [24687496](https://pubmed.ncbi.nlm.nih.gov/24687496) | The study performs a population PK/PD analysis for sutezolid in humans, but the specific quantitative PK parameter values (CL, V, etc.) are not listed in the provided abstract text, likely residing in the full text tables or supplementary material. |
| `Kim_2020.pdf` | Kim S et al., Pharmacokinetics of tedizolid, sutezoli…, European journal of pharmac… (2020) | popPK | 8 | [10.1016/j.ejps.2020.105421](https://doi.org/10.1016/j.ejps.2020.105421) | [32531349](https://pubmed.ncbi.nlm.nih.gov/32531349) | The paper describes a population PK study of sutezolid in NHPs with compartmental models, but no numeric parameter values (CL, V, etc.) are provided in the extracted evidence. |

<sub>queue written 2026-10-09T10:00:29.837645+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Alsultan_2017 | irrelevant | 1 | 0 | The study reports population PK parameters for AZD-5847, while sutezolid is only used as a comparator in simulations without original quantitative disposition values. |
| popPK | Karpiuk_2017 | irrelevant | 1 | 0 | This is a review of oxazolidinones in clinical trials without any original quantitative pharmacokinetic parameters or specific numeric values for sutezolid. |
| popPK | Kim_2020 | relevant | 8 | 0 | The paper describes a population PK study of sutezolid in NHPs with compartmental models, but no numeric parameter values (CL, V, etc.) are provided in the extracted evidence. |
| popPK | Koele_2025 | irrelevant | 1 | 0 | This is a cardiac safety (QTc prolongation) and pharmacodynamic study; while it references PK exposure metrics generated from external models, it does not report quantitative PK parameters (CL, V, etc.) for sutezolid. |
| popPK | Wang_2026 | irrelevant | 0 | 0 | The paper is a review of TB chemotherapy progress that mentions Sutezolid as a new agent but provides no pharmacokinetic parameters or quantitative disposition data. |
| popPK | Zhu_2014 | relevant | 9 | 2 | The study performs a population PK/PD analysis for sutezolid in humans, but the specific quantitative PK parameter values (CL, V, etc.) are not listed in the provided abstract text, likely residing in the full text tables or supplementary material. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
