<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;J01M&quot;,&quot;href&quot;:&quot;atc/J01M.md&quot;},{&quot;label&quot;:&quot;sitafloxacin&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Sitafloxacin_Paiboonvong2025_reference&quot;,&quot;label&quot;:&quot;Paiboonvong_2025_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_sitafloxacin/Sitafloxacin_Paiboonvong2025_reference.md&quot;,&quot;status&quot;:&quot;extracted&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

# sitafloxacin

- **generic name:** sitafloxacin
- **ATC codes:** `J01MA21`
- **DrugBank:** [DB13261](https://go.drugbank.com/drugs/DB13261) · **PubChem:** not captured
- **molar mass:** 873.68 g/mol (C38H42Cl2F4N6O9) — DrugBank
- **groups:** investigational

## About

Sitafloxacin is a fluoroquinolone antibacterial investigated for treating bacterial infections. It is not authorised in the European Union and remains investigational.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q3962322](https://www.wikidata.org/wiki/Q3962322) and the WHO ATC classification; not checked by a person.</small>

## Molecules and molar masses

> The molar mass each model uses to convert mass to molar concentration and to form a metabolite molecule for molecule. Looked up, never estimated: DrugBank for the drug, the paper's own value or the PubChem entry matched to the paper's name for a metabolite.

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| sitafloxacin | parent | 873.68 | C38H42Cl2F4N6O9 | DrugBank | — | Paiboonvong_2025, Tanigawara_2013 |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 12:21 | 19:52 | 1/0/1 | 1/0/0 | 0/0/0 | 90,109/3,459 | einfracz / qwen3.8-27b | 5 | 1/4 | 5/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> | [Paiboonvong_2025_reference](drugs/drug_sitafloxacin/Sitafloxacin_Paiboonvong2025_reference.md) | ▶ model + simulator | 1-compartment, oral | 5 (+1 cov.) | Paiboonvong T et al., Population Pharmacokinetics and Pharmac…, Pharmacology research & per… (2025) | [10.1002/prp2.70081](https://doi.org/10.1002/prp2.70081) |
| <span class="pk-badge pk-badge--orange">needs review</span><br><sub>blocking: disposition incomplete — only volume extracted — the engineer needs clearance/e…</sub><br><sub>route_to: `human_review`</sub> | [Tanigawara_2013_reference](drugs/drug_sitafloxacin/Sitafloxacin_Tanigawara2013_reference.md) | — | 1-compartment (no model) | 2 | Tanigawara Y et al., Population pharmacokinetics and pharmac…, Journal of infection and ch… (2013) | [10.1007/s10156-013-0580-2](https://doi.org/10.1007/s10156-013-0580-2) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Guo_2022_killing_effect](drugs/drug_sitafloxacin/pd_Guo_2022_killing_effect.md) | killing effect ← sitafloxacin · direct sigmoid Emax (Hill) effect | — | Guo S et al., Sitafloxacin pharmacokinetics/pharmacod…, The Journal of antimicrobia… (2022) | [10.1093/jac/dkac365](https://doi.org/10.1093/jac/dkac365) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=sitafloxacin) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| metabolism | liver | `CYP1A2` inhibitor | DrugBank actor |

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 8 matched, 8 returned
- **screened:** 2  ·  **relevant:** 3
- **records:** 2  ·  extracted 1  ·  needs_review 1  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Guo_2022 | irrelevant | 1 | 0 | The study is an in vitro PK/PD simulation model, not a pharmacokinetic study reporting disposition parameters (CL, V, etc.) for the drug itself. |
| popPK | Kohno_2013 | irrelevant | 1 | 0 | The study reports PK-PD indices (fAUC/MIC, fCmax/MIC) for clinical dose optimization but does not provide quantitative disposition parameters (CL, V, ka) or compartmental model parameters for sitafloxacin. |
| popPK | Rodjun_2023 | irrelevant | 4 | 2 | The study is a simulation using pre-existing PK models for sitafloxacin; while Table 2 in the text mentions parameters, the specific numeric values for the sitafloxacin model are not present in the provided evidence (only colistin parameters and dose optimization results are visible). |
| popPK | Yamagishi_2017 | irrelevant | 0 | 0 | The study calculates PK-PD breakpoints and uses Monte Carlo simulations based on PK parameters cited from other studies; it does not report original quantitative PK parameters (CL, V, ka) for sitafloxacin. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-07 12:03 UTC</sub>
