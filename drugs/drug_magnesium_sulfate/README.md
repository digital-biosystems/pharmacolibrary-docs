<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;A06A&quot;,&quot;href&quot;:&quot;atc/A06A.md&quot;},{&quot;label&quot;:&quot;magnesium sulfate&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;MagnesiumSulfate_Deng2024_reference&quot;,&quot;label&quot;:&quot;Deng_2024_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_magnesium_sulfate/MagnesiumSulfate_Deng2024_reference.md&quot;,&quot;status&quot;:&quot;extracted \u00b7 stale&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;MagnesiumSulfate_da2020_reference&quot;,&quot;label&quot;:&quot;da_2020_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_magnesium_sulfate/MagnesiumSulfate_da2020_reference.md&quot;,&quot;status&quot;:&quot;reviewed \u2014 candidate&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;pd_Lu_2002_DBP&quot;,&quot;label&quot;:&quot;Lu_2002 \u00b7 DBP&quot;,&quot;group&quot;:&quot;PD&quot;,&quot;href&quot;:&quot;drugs/drug_magnesium_sulfate/pd_Lu_2002_DBP.md&quot;,&quot;status&quot;:&quot;needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;pd_Lu_2002_SBP&quot;,&quot;label&quot;:&quot;Lu_2002 \u00b7 SBP&quot;,&quot;group&quot;:&quot;PD&quot;,&quot;href&quot;:&quot;drugs/drug_magnesium_sulfate/pd_Lu_2002_SBP.md&quot;,&quot;status&quot;:&quot;needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

# magnesium sulfate

- **generic name:** magnesium sulfate
- **ATC codes:** `A06AD04`, `A12CC02`, `B05XA05`, `D11AX05`, `V04CC02`
- **DrugBank:** [DB00653](https://go.drugbank.com/drugs/DB00653) · **PubChem:** [CID 24083](https://pubchem.ncbi.nlm.nih.gov/compound/24083)
- **molar mass:** 120.368 g/mol (MgO4S) — DrugBank
- **groups:** approved, investigational, vet_approved

## About

Magnesium sulfate is used as a laxative for constipation, as a magnesium supplement, and in electrolyte solutions; it also acts as an anticonvulsant, antiarrhythmic, analgesic, anesthetic, and tocolytic agent. It is widely used in human medicine and is also an approved veterinary drug, with some investigational uses.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q288266](https://www.wikidata.org/wiki/Q288266) and the WHO ATC classification; not checked by a person.</small>

## Molecules and molar masses

> The molar mass each model uses to convert mass to molar concentration and to form a metabolite molecule for molecule. Looked up, never estimated: DrugBank for the drug, the paper's own value or the PubChem entry matched to the paper's name for a metabolite.

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| magnesium | metabolite | 24.305 | Mg | PubChem | [5462224](https://pubchem.ncbi.nlm.nih.gov/compound/5462224) | Brookfield_2021 |
| magnesium_sulfate | metabolite | 120.368 | MgO4S | DrugBank | [24083](https://pubchem.ncbi.nlm.nih.gov/compound/24083) | Brookfield_2021, Deng_2024, da_2020 |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-04 16:18 | 8:27 | 2/2/0 | 0/0/1 | 0/0/0 | 88,191/27,896 | ollama / qwen3.8:27b-mtp-q8_0 | 2 | 0/2 | 2/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.333). The first reading is what the record holds.">cross-check: disputed</span><br><sub>STALE — current validate: extracted</sub><br><sub>route_to: `engineer_replication`</sub> | [Deng_2024_reference](drugs/drug_magnesium_sulfate/MagnesiumSulfate_Deng2024_reference.md) | ▶ model + simulator | 1-compartment, IV | 2 | Deng J et al., Population pharmacokinetics and dose op…, BMC pregnancy and childbirth (2024) | [10.1186/s12884-024-06620-x](https://doi.org/10.1186/s12884-024-06620-x) |
| <span class="pk-badge pk-badge--green">reviewed — candidate</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.75). The first reading is what the record holds.">cross-check: disputed</span> | [da_2020_reference](drugs/drug_magnesium_sulfate/MagnesiumSulfate_da2020_reference.md) | ▶ model + simulator | 1-compartment, IV | 2 | da Costa TX et al., Population Pharmacokinetics of Magnesiu…, Drugs in R&D (2020) | [10.1007/s40268-020-00315-2](https://doi.org/10.1007/s40268-020-00315-2) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.444). The first reading is what the record holds.">cross-check: disputed</span><br><sub>blocking: no distribution volume and no clearance/elimination — not a compartmental popPK…</sub><br><sub>route_to: `human_review`</sub> | [Brookfield_2021_reference](drugs/drug_magnesium_sulfate/MagnesiumSulfate_Brookfield2021_reference.md) | — | 1-compartment (no model) | 2 | Brookfield K et al., Magnesium sulfate pharmacokinetics afte…, AJOG global reports (2021) | [10.1016/j.xagr.2021.100018](https://doi.org/10.1016/j.xagr.2021.100018) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.25). The first reading is what the record holds.">cross-check: disputed</span><br><sub>blocking: missing key parameters — none reported by this paper</sub><br><sub>route_to: `human_review`</sub> | [Lu_2002_reference](drugs/drug_magnesium_sulfate/MagnesiumSulfate_Lu2002_reference.md) | — | 1-compartment (no model) | 0 | Lu J et al., Pharmacokinetic-pharmacodynamic modelli…, Clinical pharmacokinetics (2002) | [10.2165/00003088-200241130-00007](https://doi.org/10.2165/00003088-200241130-00007) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--orange">needs review</span> | [Lu_2002_DBP](drugs/drug_magnesium_sulfate/pd_Lu_2002_DBP.md) | diastolic blood pressure ← magnesium · delayed effect through an effect compartment | ▶ model + simulator | Lu J et al., Pharmacokinetic-pharmacodynamic modelli…, Clinical pharmacokinetics (2002) | [10.2165/00003088-200241130-00007](https://doi.org/10.2165/00003088-200241130-00007) |
| <span class="pk-badge pk-badge--orange">needs review</span> | [Lu_2002_SBP](drugs/drug_magnesium_sulfate/pd_Lu_2002_SBP.md) | systolic blood pressure ← magnesium · delayed effect through an effect compartment | ▶ model + simulator | Lu J et al., Pharmacokinetic-pharmacodynamic modelli…, Clinical pharmacokinetics (2002) | [10.2165/00003088-200241130-00007](https://doi.org/10.2165/00003088-200241130-00007) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=magnesium_sulfate) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| excretion | kidney | <sub>named in DrugBank's ADME text</sub> | prose |

<sub>Actors without a tissue in the table: CACNA1C (blocker), CACNA1C (inhibitor).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 28 matched, 20 returned
- **screened:** 4  ·  **relevant:** 4
- **records:** 4  ·  extracted 2  ·  needs_review 0  ·  rejected 2  ·  stale 1
- **scholar-agent fallback query used:** not captured

## Full text wanted

_3 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Brookfield_2021.pdf` | Brookfield K et al., Magnesium sulfate pharmacokinetics afte…, AJOG global reports (2021) | popPK | 10 | [10.1016/j.xagr.2021.100018](https://doi.org/10.1016/j.xagr.2021.100018) | [36277458](https://pubmed.ncbi.nlm.nih.gov/36277458) | The study reports a compartmental PK model for magnesium sulfate with specific numeric values for absorption rate constant and bioavailability, though other parameters like clearance and volume are described as weight-adjusted without explicit base values provided in the text. |
| `Lu_2002.pdf` | Lu J et al., Pharmacokinetic-pharmacodynamic modelli…, Clinical pharmacokinetics (2002) | popPK | 10 | [10.2165/00003088-200241130-00007](https://doi.org/10.2165/00003088-200241130-00007) | [12403646](https://pubmed.ncbi.nlm.nih.gov/12403646) | The paper reports a population pharmacokinetic model for magnesium sulfate with explicit numeric values for clearance, volumes, and intercompartmental clearance in the abstract. |
| `Rower_2025.pdf` | Rower JE et al., Pharmacokinetics and Pharmacodynamics o…, Journal of clinical pharmac… (2025) | popPK | 8 | [10.1002/jcph.6179](https://doi.org/10.1002/jcph.6179) | [39775569](https://pubmed.ncbi.nlm.nih.gov/39775569) | The study reports a population PK model and exposure targets (AUC) for magnesium sulfate, but specific numeric parameter values (CL, V, etc.) are not explicitly listed in the provided text. |

<sub>queue written 2026-10-04T16:11:00.430911+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Lu_2000 | relevant | 4 | 5 | The paper is a review that reports a specific range for apparent volume of distribution (0.250-0.442 L/kg) and describes a 2-compartment model, but lacks specific clearance or half-life values. |
| popPK | Rower_2025 | relevant | 8 | 2 | The study reports a population PK model and exposure targets (AUC) for magnesium sulfate, but specific numeric parameter values (CL, V, etc.) are not explicitly listed in the provided text. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-04 16:11 UTC</sub>
