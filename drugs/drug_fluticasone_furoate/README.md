<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;R01A&quot;,&quot;href&quot;:&quot;atc/R01A.md&quot;},{&quot;label&quot;:&quot;fluticasone furoate&quot;}]"></div>

# fluticasone furoate

- **generic name:** fluticasone furoate
- **ATC codes:** `R01AD12`, `R03AK10`, `R03AL08`, `R03BA09`
- **DrugBank:** [DB08906](https://go.drugbank.com/drugs/DB08906) · **PubChem:** [CID 9854489](https://pubchem.ncbi.nlm.nih.gov/compound/9854489)
- **molar mass:** 538.576 g/mol (C27H29F3O6S) — DrugBank
- **groups:** approved, investigational

## About

Fluticasone furoate is a corticosteroid used to treat allergic rhinitis and obstructive airway diseases such as chronic obstructive pulmonary disease. It is authorised in the European Union and widely used as a nasal spray and in inhaled combination products for respiratory conditions.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q2166700](https://www.wikidata.org/wiki/Q2166700) and the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## Molecules and molar masses

> The molar mass each model uses to convert mass to molar concentration and to form a metabolite molecule for molecule. Looked up, never estimated: DrugBank for the drug, the paper's own value or the PubChem entry matched to the paper's name for a metabolite.

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| fluticasone furoate (fluticasone_furoate) | parent | 538.576 | C27H29F3O6S | DrugBank | [9854489](https://pubchem.ncbi.nlm.nih.gov/compound/9854489) | Mehta_2018, Mehta_2020, Siederer_2016 |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 12:57 | 2:25 | 4/2/2 | 0/0/0 | 0/0/0 | 90,644/7,518 | ollama / glm-5.3-flash | 4 | 0/4 | 4/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> | [Mehta_2018_historical_model_parameter_estimates](drugs/drug_fluticasone_furoate/FluticasoneFuroate_Mehta2018_historical_model_parameter_esti.md) | held back | 1-compartment, oral | 5 | Mehta R et al., Population Pharmacokinetic Analysis of…, Journal of clinical pharmac… (2018) | [10.1002/jcph.1253](https://doi.org/10.1002/jcph.1253) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Mehta_2018_historical_model_parameter_estimates_rse](drugs/drug_fluticasone_furoate/FluticasoneFuroate_Mehta2018_historical_model_parameter_esti.md) | held back | 1-compartment, oral | 5 | Mehta R et al., Population Pharmacokinetic Analysis of…, Journal of clinical pharmac… (2018) | [10.1002/jcph.1253](https://doi.org/10.1002/jcph.1253) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Mehta_2018_model_parameter_estimates_with_combined_dataset](drugs/drug_fluticasone_furoate/FluticasoneFuroate_Mehta2018_model_parameter_estimates_with.md) | held back | 1-compartment, oral | 5 | Mehta R et al., Population Pharmacokinetic Analysis of…, Journal of clinical pharmac… (2018) | [10.1002/jcph.1253](https://doi.org/10.1002/jcph.1253) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Mehta_2018_model_parameter_estimates_with_combined_dataset_rse](drugs/drug_fluticasone_furoate/FluticasoneFuroate_Mehta2018_model_parameter_estimates_with.md) | held back | 1-compartment, oral | 5 | Mehta R et al., Population Pharmacokinetic Analysis of…, Journal of clinical pharmac… (2018) | [10.1002/jcph.1253](https://doi.org/10.1002/jcph.1253) |
| <span class="pk-badge pk-badge--orange">needs review</span><br><sub>blocking: disposition incomplete — only clearance/elimination extracted — the engineer ne…</sub><br><sub>route_to: `human_review`</sub> | [Mehta_2020_reference](drugs/drug_fluticasone_furoate/FluticasoneFuroate_Mehta2020_reference.md) | — | 1-compartment (no model) | 2 | Mehta R et al., Population Pharmacokinetic Analysis of…, Clinical pharmacokinetics (2020) | [10.1007/s40262-019-00794-w](https://doi.org/10.1007/s40262-019-00794-w) |
| <span class="pk-badge pk-badge--orange">needs review</span><br><sub>blocking: disposition incomplete — only clearance/elimination extracted — the engineer ne…</sub><br><sub>route_to: `human_review`</sub> | [Siederer_2016_reference](drugs/drug_fluticasone_furoate/FluticasoneFuroate_Siederer2016_reference.md) | — | 1-compartment (no model) | 3 | Siederer S et al., Population Pharmacokinetics of Inhaled…, European journal of drug me… (2016) | [10.1007/s13318-015-0303-4](https://doi.org/10.1007/s13318-015-0303-4) |
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: C9 clearance/volume outside physiological window (implausible magnitude — unit/…</sub><br><sub>route_to: `human_review`</sub> | [Mehta_2018_combined_model_ln_estimates](drugs/drug_fluticasone_furoate/FluticasoneFuroate_Mehta2018_combined_model_ln_estimates.md) | — | 1-compartment (no model) | 5 | Mehta R et al., Population Pharmacokinetic Analysis of…, Journal of clinical pharmac… (2018) | [10.1002/jcph.1253](https://doi.org/10.1002/jcph.1253) |
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: C9 clearance/volume outside physiological window (implausible magnitude — unit/…</sub><br><sub>route_to: `human_review`</sub> | [Mehta_2018_historical_model_ln_estimates](drugs/drug_fluticasone_furoate/FluticasoneFuroate_Mehta2018_historical_model_ln_estimates.md) | — | 1-compartment (no model) | 5 | Mehta R et al., Population Pharmacokinetic Analysis of…, Journal of clinical pharmac… (2018) | [10.1002/jcph.1253](https://doi.org/10.1002/jcph.1253) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=fluticasone_furoate) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | blood-brain barrier | `ABCB1` inducer/substrate | DrugBank actor |
| absorption | kidney | `ABCB1` inducer/substrate | DrugBank actor |
| absorption | liver | `ABCB1` inducer/substrate | DrugBank actor |
| absorption | lung | <sub>named in DrugBank's ADME text</sub> | prose |
| absorption | placenta | `ABCB1` inducer/substrate | DrugBank actor |
| absorption | small intestine | `ABCB1` inducer/substrate | DrugBank actor |
| absorption | testis | `ABCB1` inducer/substrate | DrugBank actor |
| distribution | blood | `ALB` binder, `ORM1` binder | DrugBank actor |
| metabolism | kidney | `CYP3A5` inducer/inhibitor/substrate | DrugBank actor |
| metabolism | liver | `CYP2C8` inhibitor, `CYP3A4` inducer/inhibitor/substrate, `CYP3A5` inducer/inhibitor/substrate, `CYP3A7` substrate, `SLCO1B1` inhibitor | DrugBank actor |
| metabolism | small intestine | `CYP3A4` inducer/inhibitor/substrate, `CYP3A5` inducer/inhibitor/substrate | DrugBank actor |
| excretion | bile duct | <sub>named in DrugBank's ADME text</sub> | prose |
| excretion | kidney | <sub>named in DrugBank's ADME text</sub> | prose |

<sub>Actors without a tissue in the table: NR3C1 (target), NR3C2 (target), PGR (target), SERPINA6 (binder).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 8 matched, 8 returned
- **screened:** 4  ·  **relevant:** 4
- **records:** 8  ·  extracted 4  ·  needs_review 2  ·  rejected 2  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full text wanted

_2 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Yang_2021.pdf` | Yang S et al., Population Pharmacokinetic Modeling of…, Clinical pharmacokinetics (2021) | popPK | 10 | [10.1007/s40262-021-00988-1](https://doi.org/10.1007/s40262-021-00988-1) | [33598874](https://pubmed.ncbi.nlm.nih.gov/33598874) | Population PK model for FF in humans is described, but numeric parameter values (CL, V, ka) are not in the abstract/evidence, likely in tables or supplementary material not provided. |
| `Allen_2016.pdf` | Allen A et al., Population pharmacokinetics of inhaled…, International journal of cl… (2016) | popPK | 9 | [10.5414/CP202438](https://doi.org/10.5414/CP202438) | [26902504](https://pubmed.ncbi.nlm.nih.gov/26902504) | Population PK model of fluticasone furoate (two-compartment, first-order absorption) in asthma patients, but actual CL/V/ka parameter values are not shown in the evidence, only covariate effect percentages. |

<sub>queue written 2026-10-07T12:55:02.850488+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Allen_2016 | relevant | 9 | 3 | Population PK model of fluticasone furoate (two-compartment, first-order absorption) in asthma patients, but actual CL/V/ka parameter values are not shown in the evidence, only covariate effect percentages. |
| popPK | Yang_2017 | irrelevant | 0 | 0 | The population PK model is for umeclidinium; fluticasone furoate is only mentioned as a co-developed combination partner, with no FF parameters reported. |
| popPK | Yang_2021 | relevant | 10 | 3 | Population PK model for FF in humans is described, but numeric parameter values (CL, V, ka) are not in the abstract/evidence, likely in tables or supplementary material not provided. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-07 12:55 UTC</sub>
