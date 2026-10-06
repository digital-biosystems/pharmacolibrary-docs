<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N05A&quot;,&quot;href&quot;:&quot;atc/N05A.md&quot;},{&quot;label&quot;:&quot;tiapride&quot;}]"></div>

# tiapride

- **generic name:** tiapride
- **ATC codes:** `N05AL03`
- **DrugBank:** [DB13025](https://go.drugbank.com/drugs/DB13025) · **PubChem:** [CID 5467](https://pubchem.ncbi.nlm.nih.gov/compound/5467)
- **molar mass:** 328.427 g/mol (C15H24N2O4S) — DrugBank
- **groups:** investigational

## About

Tiapride is a benzamide antipsychotic used for psychiatric and neurological conditions. It is not authorised by the European Medicines Agency and is currently considered investigational.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q416414](https://www.wikidata.org/wiki/Q416414) and the WHO ATC classification; not checked by a person.</small>

## Molecules and molar masses

> The molar mass each model uses to convert mass to molar concentration and to form a metabolite molecule for molecule. Looked up, never estimated: DrugBank for the drug, the paper's own value or the PubChem entry matched to the paper's name for a metabolite.

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| tiapride | parent | 328.427 | C15H24N2O4S | DrugBank | [5467](https://pubchem.ncbi.nlm.nih.gov/compound/5467) | Huang_2026, Norman_1987, Rey_1982 |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-06 17:43 | 12:50 | 0/2/1 | 3/0/0 | 0/0/0 | 402,319/12,388 | ollama / glm-5.3-flash | 9 | 0/6 | 9/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--orange">needs review</span><br><sub>blocking: disposition incomplete — clearance/elimination from this paper; review-gap-fill…</sub><br><sub>route_to: `human_review`</sub> | [Norman_1987_reference](drugs/drug_tiapride/Tiapride_Norman1987_reference.md) | — | 1-compartment (no model) | 4 | Norman T et al., Single oral dose pharmacokinetics of ti…, European journal of clinica… (1987) | [10.1007/BF02455992](https://doi.org/10.1007/BF02455992) |
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: C5 dimension mismatch on a structural parameter</sub><br><sub>route_to: `human_review`</sub> | [Huang_2026_reference](drugs/drug_tiapride/Tiapride_Huang2026_reference.md) | — | 1-compartment (no model) | 6 | Huang W et al., Population Pharmacokinetics of Tiapride…, Drug design, development an… (2026) | [10.2147/DDDT.S587387](https://doi.org/10.2147/DDDT.S587387) |
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: no distribution volume and no clearance/elimination — not a compartmental popPK…</sub><br><sub>route_to: `human_review`</sub> | [Rey_1982_reference](drugs/drug_tiapride/Tiapride_Rey1982_reference.md) | — | 1-compartment (no model) | 2 | Rey E et al., Pharmacokinetics of tiapride and absolu…, International journal of cl… (1982) | — |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from keyword rules on the title and abstract — no LLM answer yet).">rat</span> | [Arima_1986_D_1_binding](drugs/drug_tiapride/pd_Arima_1986_D_1_binding.md) | [3H]-cis-flupenthixol binding to D-1 dopamine receptors (rat striatum) ← tiapride · direct sigmoid Emax (Hill) effect | — | Arima T et al., Comparison of effects of tiapride and s…, Japanese journal of pharmac… (1986) | [10.1254/jjp.41.419](https://doi.org/10.1254/jjp.41.419) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from keyword rules on the title and abstract — no LLM answer yet).">rat</span> | [Arima_1986_D_2_binding](drugs/drug_tiapride/pd_Arima_1986_D_2_binding.md) | [3H]spiperone binding to D-2 dopamine receptors (rat striatum) ← tiapride · direct sigmoid Emax (Hill) effect | — | Arima T et al., Comparison of effects of tiapride and s…, Japanese journal of pharmac… (1986) | [10.1254/jjp.41.419](https://doi.org/10.1254/jjp.41.419) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from keyword rules on the title and abstract — no LLM answer yet).">rat</span> | [Arima_1986_D_3_binding](drugs/drug_tiapride/pd_Arima_1986_D_3_binding.md) | [3H]N-propylapomorphine binding to D-3 dopamine receptors ← tiapride · direct sigmoid Emax (Hill) effect | — | Arima T et al., Comparison of effects of tiapride and s…, Japanese journal of pharmac… (1986) | [10.1254/jjp.41.419](https://doi.org/10.1254/jjp.41.419) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from keyword rules on the title and abstract — no LLM answer yet).">rat</span> | [Arima_1986_D_4_binding](drugs/drug_tiapride/pd_Arima_1986_D_4_binding.md) | [3H]N-propylapomorphine binding to D-4 dopamine receptors (bovine caudate nucleus) ← tiapride · direct sigmoid Emax (Hill) effect | — | Arima T et al., Comparison of effects of tiapride and s…, Japanese journal of pharmac… (1986) | [10.1254/jjp.41.419](https://doi.org/10.1254/jjp.41.419) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from keyword rules on the title and abstract — no LLM answer yet).">rat</span> | [Lorke_2011_AChE](drugs/drug_tiapride/pd_Lorke_2011_AChE.md) | RBC AChE activity inhibition ← tiapride · inhibition effect | — | Lorke DE et al., Pretreatment for acute exposure to diis…, Journal of applied toxicolo… (2011) | [10.1002/jat.1589](https://doi.org/10.1002/jat.1589) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="The paper reports both human and animal data (from keyword rules on the title and abstract — no LLM answer yet).">human + animal</span> | [Petroianu_2005_2_IC50](drugs/drug_tiapride/pd_Petroianu_2005_2_IC50.md) | DDVP IC50 for cholinesterase inhibition (RBC AChE and plasma BChE) ← tiapride · direct linear effect | — | Petroianu GA et al., Weak inhibitors protect cholinesterases…, International journal of to… (2005) | [10.1080/10915810590921360](https://doi.org/10.1080/10915810590921360) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=tiapride) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | brain | <sub>named in DrugBank's ADME text</sub> | prose |
| metabolism | kidney | <sub>named in DrugBank's ADME text</sub> | prose |
| excretion | kidney | <sub>named in DrugBank's ADME text</sub> | prose |

<sub>Actors without a tissue in the table: ADRA1A (target), ADRA2A (target), DRD2 (blocker), DRD3 (blocker), HTR1A (target), SCN10A (inhibitor).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 80 matched, 65 returned
- **screened:** 3  ·  **relevant:** 3
- **records:** 3  ·  extracted 0  ·  needs_review 1  ·  rejected 2  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full text wanted

_3 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Halouzková_2026.pdf` | Halouzková BA et al., Population pharmacokinetic-based dose a…, Annals of medicine (2026) | popPK | 10 | [10.1080/07853890.2026.2685456](https://doi.org/10.1080/07853890.2026.2685456) | [42391036](https://pubmed.ncbi.nlm.nih.gov/42391036) | Human population-PK study of tiapride in 71 patients with renal impairment, but no numeric parameter values (CL, V, estimates) appear in the evidence — likely in tables/supplement not provided. |
| `Norman_1987.pdf` | Norman T et al., Single oral dose pharmacokinetics of ti…, European journal of clinica… (1987) | popPK | 9 | [10.1007/BF02455992](https://doi.org/10.1007/BF02455992) | [2958291](https://pubmed.ncbi.nlm.nih.gov/2958291) | Human PK study of tiapride reporting half-life (5.3 h), clearance (16.6 l/h), Cmax, and urinary recovery directly in the abstract, though volume and compartmental parameters are not given. |
| `Rey_1982.pdf` | Rey E et al., Pharmacokinetics of tiapride and absolu…, International journal of cl… (1982) | popPK | 9 | not captured | [7061180](https://pubmed.ncbi.nlm.nih.gov/7061180) | Human PK study of tiapride with two-compartment model, half-life, and renal clearance values reported directly in the abstract; some parameters (V, microconstants) not given but key values are present. |

<sub>queue written 2026-10-06T17:39:22.542194+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Allen_2026 | irrelevant | 0 | 0 | Systematic review/meta-analysis of AUD pharmacotherapy effectiveness by sex; no tiapride PK parameters reported. |
| popPK | Barry_1987 | irrelevant | 0 | 0 | Behavioral pharmacology study in mice with no PK parameters for tiapride. |
| popPK | Branson_2011 | irrelevant | 0 | 0 | no_text gate: only 39 chars of text extracted (&lt; 400) |
| popPK | Costall_1987 | irrelevant | 0 | 0 | Behavioral pharmacology study in mice; no PK parameters for tiapride are reported. |
| popPK | Doubliez_2025 | irrelevant | 0 | 0 | Tiapride is only a co-administered pharmacological probe in a fear-conditioning study; no PK parameters (CL, V, half-life, model) are reported, and drug concentrations are only mentioned as external analyses in supplementary material. |
| popPK | Eugene_2021 | irrelevant | 0 | 0 | This is a pharmacovigilance (FAERS) disproportionality study of sedation/somnolence; tiapride is only one of 37 drugs ranked by ROR, with no PK parameters (CL, V, ka, half-life, or PK model) reported. |
| PGx | Eugene_2021 | not_relevant | 0 | 0 | FAERS disproportionality analysis of sedation/somnolence; no gene variant or genotype effects on tiapride PK/PD reported. |
| popPK | Gault_2015 | irrelevant | 0 | 0 | This is a phase 2 trial of ABT-126 in Alzheimer's disease; tiapride is only mentioned as a prior concomitant medication, with no tiapride PK parameters reported. |
| popPK | Halouzková_2026 | relevant | 10 | 3 | Human population-PK study of tiapride in 71 patients with renal impairment, but no numeric parameter values (CL, V, estimates) appear in the evidence — likely in tables/supplement not provided. |
| PGx | Sakamoto_2017 | not_relevant | 0 | 0 | Reports tiapride-induced NMS as an adverse event, not a genotype-dependent PK/PD effect of tiapride. |
| popPK | Weibel_2020 | irrelevant | 0 | 0 | This is a network meta-analysis of antiemetic efficacy; tiapride is not studied and no PK parameters appear. |
| popPK | unknown_2020 | irrelevant | 0 | 0 | This is a conference abstracts collection on Alzheimer's disease trials; tiapride is not mentioned and no PK parameters for it appear. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-06 17:39 UTC</sub>
