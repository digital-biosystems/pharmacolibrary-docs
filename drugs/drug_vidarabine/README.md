<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;J05A&quot;,&quot;href&quot;:&quot;atc/J05A.md&quot;},{&quot;label&quot;:&quot;vidarabine&quot;}]"></div>

# vidarabine

- **generic name:** vidarabine
- **ATC codes:** `J05AB03`, `S01AD06`
- **DrugBank:** [DB00194](https://go.drugbank.com/drugs/DB00194) · **PubChem:** [CID 21704](https://pubchem.ncbi.nlm.nih.gov/compound/21704)
- **molar mass:** 267.2413 g/mol (C10H13N5O4) — DrugBank
- **groups:** approved, withdrawn

## About

Vidarabine is an antiviral drug that was used to treat herpes simplex infections, including herpes simplex keratitis of the eye. It has been withdrawn from use, having been largely replaced by newer antiviral medicines.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q415107](https://www.wikidata.org/wiki/Q415107) and the WHO ATC classification; not checked by a person.</small>

## Molecules and molar masses

> The molar mass each model uses to convert mass to molar concentration and to form a metabolite molecule for molecule. Looked up, never estimated: DrugBank for the drug, the paper's own value or the PubChem entry matched to the paper's name for a metabolite.

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| vidarabine (vidarabine (Ara-A)) | parent | 267.241 | C10H13N5O4 | DrugBank | [21704](https://pubchem.ncbi.nlm.nih.gov/compound/21704) | Yang_1992 |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 15:59 | 7:27 | 0/1/0 | 2/0/0 | 0/0/0 | 144,283/41,308 | openai / gpt-6-luna | 2 | 0/2 | 2/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--species" title="Animal study (mouse), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">mouse</span><br><sub>blocking: no distribution volume and no clearance/elimination — not a compartmental popPK…</sub><br><sub>route_to: `human_review`</sub> | [Yang_1992_reference](drugs/drug_vidarabine/Vidarabine_Yang1992_reference.md) | — | 1-compartment (no model) | 3 | Yang TY et al., [Studies on pharmacokinetics of 9-beta-…, Yao xue xue bao = Acta phar… (1992) | — |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Rabie_2023_EC50](drugs/drug_vidarabine/pd_Rabie_2023_EC50.md) | 50%Reduction in Infectious Virus ← vidarabine · direct sigmoid Emax (Hill) effect | — | Rabie AM et al., Evaluation of a series of nucleoside an…, Medicinal chemistry researc… (2023) | [10.1007/s00044-022-02970-3](https://doi.org/10.1007/s00044-022-02970-3) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Rabie_2023_EC50_2](drugs/drug_vidarabine/pd_Rabie_2023_EC50_2.md) | 50% Reduction in Viral RNA Copy ← vidarabine · direct sigmoid Emax (Hill) effect | — | Rabie AM et al., Evaluation of a series of nucleoside an…, Medicinal chemistry researc… (2023) | [10.1007/s00044-022-02970-3](https://doi.org/10.1007/s00044-022-02970-3) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Rabie_2023_RdRp](drugs/drug_vidarabine/pd_Rabie_2023_RdRp.md) | Inhibition of SARS-CoV-2 RdRp in vitro ← vidarabine · inhibition effect | — | Rabie AM et al., Evaluation of a series of nucleoside an…, Medicinal chemistry researc… (2023) | [10.1007/s00044-022-02970-3](https://doi.org/10.1007/s00044-022-02970-3) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Wang_2021_activity_against_herpes_simplex_virus_type_1_HSV_1](drugs/drug_vidarabine/pd_Wang_2021_activity_against_herpes_simplex_virus_type_1_HSV_1.md) | activity against herpes simplex virus type 1 (HSV-1) ← vidarabine · inhibition effect | — | Wang Z et al., Synthesis and antiviral effect of phosp…, Bioorganic & medicinal chem… (2021) | [10.1016/j.bmcl.2021.128405](https://doi.org/10.1016/j.bmcl.2021.128405) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=vidarabine) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|

<sub>Actors without a tissue in the table: ADA (substrate), ADORA2B (modulator), TK (inducer).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 7 matched, 7 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 1  ·  extracted 0  ·  needs_review 0  ·  rejected 1  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full text wanted

_1 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Yang_1992.pdf` | Yang TY et al., [Studies on pharmacokinetics of 9-beta-…, Yao xue xue bao = Acta phar… (1992) | popPK | 8 | not captured | [1299143](https://pubmed.ncbi.nlm.nih.gov/1299143) | The paper reports a two-compartment PK model and numeric Ara-A half-life, MRT, and AUC values. |

<sub>queue written 2026-10-07T15:52:02.839753+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Abdalla_2023 | irrelevant | 0 | 0 | Vidarabine is screened in computational and antiviral assays, but no quantitative pharmacokinetic disposition values are reported. |
| popPK | Krug_2010 | irrelevant | 0 | 0 | Vidarabine is tested only for in-vitro antiviral susceptibility, with no disposition parameters reported. |
| popPK | Oh_2000 | irrelevant | 0 | 0 | This is an in-vitro antiviral combination study, not a vidarabine pharmacokinetic study. |
| popPK | Rabie_2022 | irrelevant | 0 | 0 | The study evaluates antiviral activity in vitro and reports no pharmacokinetic disposition parameters for vidarabine. |
| popPK | Rabie_2023 | irrelevant | 0 | 0 | Vidarabine is assessed in computational and in vitro antiviral assays, with no quantitative pharmacokinetic disposition parameters reported. |
| popPK | Wang_2021 | irrelevant | 0 | 0 | This is an in-vitro antiviral activity study and reports no vidarabine disposition parameters. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-07 15:52 UTC</sub>
