<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L04A&quot;,&quot;href&quot;:&quot;atc/L04A.md&quot;},{&quot;label&quot;:&quot;siponimod&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Siponimod_Chaoyang2022v2_estimates_rse&quot;,&quot;label&quot;:&quot;Chaoyang_2022_2_estimates_rse&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_siponimod/Siponimod_Chaoyang2022v2_estimates_rse.md&quot;,&quot;status&quot;:&quot;extracted&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Siponimod_Chaoyang2022v2_weighted_geometric_mean_weighted_ge&quot;,&quot;label&quot;:&quot;Chaoyang_2022_2_weighted_geometric_mean_weighted_geometric_coefficient_of_variation&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_siponimod/Siponimod_Chaoyang2022v2_weighted_geometric_mean_weighted_ge.md&quot;,&quot;status&quot;:&quot;extracted&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

# siponimod

- **generic name:** siponimod
- **ATC codes:** `L04AA42`, `L04AE03`
- **DrugBank:** [DB12371](https://go.drugbank.com/drugs/DB12371) · **PubChem:** [CID 44599207](https://pubchem.ncbi.nlm.nih.gov/compound/44599207)
- **molar mass:** 516.605 g/mol (C29H35F3N2O3) — DrugBank
- **groups:** approved, investigational

## About

Siponimod is an immunosuppressant used to treat relapsing-remitting multiple sclerosis. It is an approved medicine authorised in the European Union.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q25100876](https://www.wikidata.org/wiki/Q25100876) and the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## Molecules and molar masses

> The molar mass each model uses to convert mass to molar concentration and to form a metabolite molecule for molecule. Looked up, never estimated: DrugBank for the drug, the paper's own value or the PubChem entry matched to the paper's name for a metabolite.

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| siponimod | parent | 516.605 | C29H35F3N2O3 | DrugBank | [44599207](https://pubchem.ncbi.nlm.nih.gov/compound/44599207) | Chaoyang_2022_2 |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 00:34 | 0:50 | 2/0/0 | 0/0/0 | 0/0/0 | 38,058/2,012 | einfracz / qwen3.8-27b | 10 | 0/1 | 1/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> | [Chaoyang_2022_2_estimates_rse](drugs/drug_siponimod/Siponimod_Chaoyang2022v2_estimates_rse.md) | ▶ model + simulator | 1-compartment, oral | 3 | Chaoyang C et al., Pharmacokinetic Characteristics of Sipo…, Frontiers in pharmacology (2022) | [10.3389/fphar.2022.824232](https://doi.org/10.3389/fphar.2022.824232) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Chaoyang_2022_2_weighted_geometric_mean_weighted_geometric_coefficient_of_variation](drugs/drug_siponimod/Siponimod_Chaoyang2022v2_weighted_geometric_mean_weighted_ge.md) | ▶ model + simulator | 1-compartment, oral | 3 | Chaoyang C et al., Pharmacokinetic Characteristics of Sipo…, Frontiers in pharmacology (2022) | [10.3389/fphar.2022.824232](https://doi.org/10.3389/fphar.2022.824232) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=siponimod) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | small intestine | <sub>named in DrugBank's ADME text</sub> | prose |
| metabolism | liver | `CYP2C9` substrate, `CYP3A4` substrate | DrugBank actor |
| metabolism | small intestine | `CYP3A4` substrate | DrugBank actor |
| excretion | bile duct | <sub>named in DrugBank's ADME text</sub> | prose |

<sub>Actors without a tissue in the table: S1PR1 (modulator), S1PR5 (modulator).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 2 matched, 2 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 2  ·  extracted 2  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Biswal_2015 | irrelevant | 2 | 0 | The study is a Drug-Drug Interaction (DDI) trial focused on pharmacodynamic endpoints (heart rate, blood pressure) rather than reporting quantitative population-pharmacokinetic parameters (CL, V, ka) for siponimod. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-07 00:33 UTC</sub>
