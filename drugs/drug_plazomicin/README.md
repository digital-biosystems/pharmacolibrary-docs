<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;J01G&quot;,&quot;href&quot;:&quot;atc/J01G.md&quot;},{&quot;label&quot;:&quot;plazomicin&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Plazomicin_Kuti2019v2_reference&quot;,&quot;label&quot;:&quot;Kuti_2019_2_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_plazomicin/Plazomicin_Kuti2019v2_reference.md&quot;,&quot;status&quot;:&quot;extracted&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Plazomicin_Trang2019v2_geometric_mean_value_cv_d&quot;,&quot;label&quot;:&quot;Trang_2019_2_geometric_mean_value_cv_d&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_plazomicin/Plazomicin_Trang2019v2_geometric_mean_value_cv_d.md&quot;,&quot;status&quot;:&quot;extracted&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

# plazomicin

- **generic name:** plazomicin
- **ATC codes:** `J01GB14`
- **DrugBank:** [DB12615](https://go.drugbank.com/drugs/DB12615) · **PubChem:** [CID 42613186](https://pubchem.ncbi.nlm.nih.gov/compound/42613186)
- **molar mass:** 592.691 g/mol (C25H48N6O10) — DrugBank
- **groups:** approved

## About

Plazomicin is an aminoglycoside antibacterial used to treat serious bacterial infections. It is an approved medicine, but it is not authorised in the European Union and carries a boxed warning.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q15426988](https://www.wikidata.org/wiki/Q15426988) and the WHO ATC classification; not checked by a person.</small>

## Molecules and molar masses

> The molar mass each model uses to convert mass to molar concentration and to form a metabolite molecule for molecule. Looked up, never estimated: DrugBank for the drug, the paper's own value or the PubChem entry matched to the paper's name for a metabolite.

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| plazomicin | parent | 592.691 | C25H48N6O10 | DrugBank | [42613186](https://pubchem.ncbi.nlm.nih.gov/compound/42613186) | Trang_2019_2 |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 15:59 | 2:11 | 2/0/2 | 0/0/0 | 0/0/0 | 147,828/7,523 | einfracz / qwen3.8-27b | 12 | 0/2 | 2/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> | [Kuti_2019_2_reference](drugs/drug_plazomicin/Plazomicin_Kuti2019v2_reference.md) | ▶ model + simulator | 1-compartment, IV | 2 | Kuti JL et al., Evaluation of Plazomicin, Tigecycline,…, Infectious diseases and the… (2019) | [10.1007/s40121-019-0251-4](https://doi.org/10.1007/s40121-019-0251-4) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Trang_2019_2_geometric_mean_value_cv_d](drugs/drug_plazomicin/Plazomicin_Trang2019v2_geometric_mean_value_cv_d.md) | ▶ model + simulator | 1-compartment, IV | 9 | Trang M et al., Population Pharmacokinetic Analyses for…, Antimicrobial agents and ch… (2019) | [10.1128/AAC.02329-18](https://doi.org/10.1128/AAC.02329-18) |
| <span class="pk-badge pk-badge--orange">needs review</span><br><sub>blocking: disposition incomplete — no disposition parameter from this paper; review-gap-f…</sub><br><sub>route_to: `human_review`</sub> | [Trang_2019_2_final_model](drugs/drug_plazomicin/Plazomicin_Trang2019v2_final_model.md) | — | 1-compartment (no model) | 3 (+5 cov.) | Trang M et al., Population Pharmacokinetic Analyses for…, Antimicrobial agents and ch… (2019) | [10.1128/AAC.02329-18](https://doi.org/10.1128/AAC.02329-18) |
| <span class="pk-badge pk-badge--neutral">None</span> <span class="pk-badge pk-badge--stale">stale</span><br><sub>STALE — current validate: not captured</sub> | [Trang_2019_2_reference](drugs/drug_plazomicin/Plazomicin_Trang2019v2_reference.md) | — | — (no model) | 0 | Trang M et al., Population Pharmacokinetic Analyses for…, Antimicrobial agents and ch… (2019) | [10.1128/AAC.02329-18](https://doi.org/10.1128/AAC.02329-18) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=plazomicin) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| excretion | bile duct | <sub>named in DrugBank's ADME text</sub> | prose |
| excretion | kidney | `SLC47A1` inhibitor, `SLC47A2` inhibitor | DrugBank actor |
| excretion | liver | `SLC47A1` inhibitor | DrugBank actor |

<sub>Actors without a tissue in the table: MRM2 (inhibitor).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 7 matched, 7 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 4  ·  extracted 2  ·  needs_review 1  ·  rejected 0  ·  stale 1
- **scholar-agent fallback query used:** not captured

## Full text wanted

_1 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Zhuang_2022.pdf` | Zhuang L et al., Application of Population Pharmacokinet…, Antimicrobial agents and ch… (2022) | popPK | 8 | [10.1128/aac.02074-21](https://doi.org/10.1128/aac.02074-21) | [35258314](https://pubmed.ncbi.nlm.nih.gov/35258314) | The study describes a population PK model and TDM strategy for plazomicin, but no quantitative parameter values (CL, V, etc.) are present in the provided evidence. |

<sub>queue written 2026-10-07T15:57:58.012334+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Kuti_2019_2 | irrelevant | 5 | 3 | The study constructs PK models and reports quantitative parameters (CL, V, k) only for the adjunctive agents tigecycline and meropenem, not for plazomicin, for which only AUC/MIC PD targets are evaluated using pre-existing AUC data. |
| popPK | Luterbach_2022 | irrelevant | 2 | 0 | This is a review article discussing PK/PD modeling approaches for plazomicin and does not report original quantitative disposition parameters in the provided evidence. |
| popPK | Shin_2024 | irrelevant | 2 | 0 | This is a population pharmacokinetic study of five aminoglycosides, but the specific drug plazomicin is not identified as the subject, and no quantitative parameter values for it are provided in the evidence. |
| popPK | Zhuang_2022 | irrelevant | 8 | 0 | The study describes a population PK model and TDM strategy for plazomicin, but no quantitative parameter values (CL, V, etc.) are present in the provided evidence. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-07 15:58 UTC</sub>
