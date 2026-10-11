<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;A16A&quot;,&quot;href&quot;:&quot;atc/A16A.md&quot;},{&quot;label&quot;:&quot;teduglutide&quot;}]"></div>

# teduglutide

- **generic name:** teduglutide
- **ATC codes:** `A16AX08`
- **DrugBank:** [DB08900](https://go.drugbank.com/drugs/DB08900) · **PubChem:** not captured
- **groups:** approved, investigational

## About

Teduglutide is a glucagon-like peptide-2 analogue used to treat short bowel syndrome. It is authorised in the European Union for short bowel syndrome and related malabsorption conditions.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q7694156](https://www.wikidata.org/wiki/Q7694156) and the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## Molecules and molar masses

> The molar mass each model uses to convert mass to molar concentration and to form a metabolite molecule for molecule. Looked up, never estimated: DrugBank for the drug, the paper's own value or the PubChem entry matched to the paper's name for a metabolite.

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| teduglutide | parent | 3752.13 | C164H252N44O55S | PubChem | [16139605](https://pubchem.ncbi.nlm.nih.gov/compound/16139605) | Marier_2010, Marier_2021 |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 17:56 | 0:51 | 0/3/1 | 1/0/0 | 0/0/0 | 79,509/3,756 | einfracz / qwen3.8-27b | 3 | 1/2 | 3/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.333). The first reading is what the record holds.">cross-check: disputed</span><br><sub>STALE — current validate: needs_review</sub><br><sub>blocking: disposition incomplete — only clearance/elimination extracted — the engineer ne…</sub><br><sub>route_to: `human_review`</sub> | [Marier_2010_reference](drugs/drug_teduglutide/Teduglutide_Marier2010_reference.md) | — | 1-compartment (no model) | 1 | Marier JF et al., Population pharmacokinetics of teduglut…, Journal of clinical pharmac… (2010) | [10.1177/0091270009342252](https://doi.org/10.1177/0091270009342252) |
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: missing key parameters — none reported by this paper</sub><br><sub>route_to: `human_review`</sub> | [Marier_2021_adults_0_05_mg_kg](drugs/drug_teduglutide/Teduglutide_Marier2021_adults_0_05_mg_kg.md) | — | 1-compartment (no model) | 0 | Marier JF et al., Population pharmacokinetics and exposur…, Clinical and translational… (2021) | [10.1111/cts.13117](https://doi.org/10.1111/cts.13117) |
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: missing key parameters — none reported by this paper</sub><br><sub>route_to: `human_review`</sub> | [Marier_2021_pediatrics_0_05_mg_kg](drugs/drug_teduglutide/Teduglutide_Marier2021_pediatrics_0_05_mg_kg.md) | — | 1-compartment (no model) | 0 | Marier JF et al., Population pharmacokinetics and exposur…, Clinical and translational… (2021) | [10.1111/cts.13117](https://doi.org/10.1111/cts.13117) |
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: no distribution volume and no clearance/elimination — not a compartmental popPK…</sub><br><sub>route_to: `human_review`</sub> | [Marier_2021_typical_values_rse](drugs/drug_teduglutide/Teduglutide_Marier2021_typical_values_rse.md) | — | 1-compartment (no model) | 1 | Marier JF et al., Population pharmacokinetics and exposur…, Clinical and translational… (2021) | [10.1111/cts.13117](https://doi.org/10.1111/cts.13117) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> | [Marier_2021_PPSV](drugs/drug_teduglutide/pd_Marier_2021_PPSV.md) | prescribed PS volume (i.e., PN/IV volume) ← teduglutide · direct Emax (saturable) effect | — | Marier JF et al., Population pharmacokinetics and exposur…, Clinical and translational… (2021) | [10.1111/cts.13117](https://doi.org/10.1111/cts.13117) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=teduglutide) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| excretion | kidney | <sub>named in DrugBank's ADME text</sub> | prose |

<sub>Actors without a tissue in the table: GLP2R (target).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 8 matched, 8 returned
- **screened:** 4  ·  **relevant:** 2
- **records:** 4  ·  extracted 0  ·  needs_review 1  ·  rejected 3  ·  stale 1
- **scholar-agent fallback query used:** not captured

## Full text wanted

_2 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Marier_2010.pdf` | Marier JF et al., Population pharmacokinetics of teduglut…, Journal of clinical pharmac… (2010) | popPK | 10 | [10.1177/0091270009342252](https://doi.org/10.1177/0091270009342252) | [19773525](https://pubmed.ncbi.nlm.nih.gov/19773525) | The evidence contains a population PK model description and explicit numeric values for apparent clearance (12.4 and 10.5 L/h) and half-life (0.897 and 2.99 hours). |
| `Roepcke_2014.pdf` | Roepcke S et al., Utility of a population pharmacokinetic…, International journal of cl… (2014) | popPK | 9 | [10.5414/CP201942](https://doi.org/10.5414/CP201942) | [25066226](https://pubmed.ncbi.nlm.nih.gov/25066226) | The paper describes a population PK model for teduglutide but the specific numeric parameter values (CL, V, etc.) are not present in the provided evidence, which only contains qualitative descriptions and covariate effects. |

<sub>queue written 2026-10-07T17:55:35.189751+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| PGx | Alters_2012 | not_relevant | 0 | 0 | The paper describes the PK/PD of a novel drug formulation (GLP2-2G-XTEN) compared to teduglutide but does not report any genetic or pharmacogenomic variations affecting these parameters. |
| PGx | Gadgaard_2023 | not_relevant | 0 | 0 | The paper focuses on the structure-activity relationship of novel GLP-2 analogs, not the impact of human genetic variants on the pharmacokinetics or pharmacodynamics of teduglutide. |
| PGx | Gu_2017 | not_relevant | 0 | 0 | The paper describes the development of a new GLP-2 analogue (GLP-2②) and its superior pharmacokinetics compared to teduglutide, but it does not investigate the effect of human gene variants on teduglutide's PK or PD parameters. |
| popPK | Micic_2024 | irrelevant | 0 | 0 | The study is a post-hoc analysis of liver chemistries (safety/efficacy) and does not report any pharmacokinetic parameters for teduglutide. |
| popPK | Roepcke_2014 | relevant | 9 | 2 | The paper describes a population PK model for teduglutide but the specific numeric parameter values (CL, V, etc.) are not present in the provided evidence, which only contains qualitative descriptions and covariate effects. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-07 17:55 UTC</sub>
