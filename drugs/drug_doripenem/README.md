<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;J01D&quot;,&quot;href&quot;:&quot;atc/J01D.md&quot;},{&quot;label&quot;:&quot;doripenem&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Doripenem_Nonoshita2020_base_model&quot;,&quot;label&quot;:&quot;Nonoshita_2020_base_model&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_doripenem/Doripenem_Nonoshita2020_base_model.md&quot;,&quot;status&quot;:&quot;extracted&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Doripenem_Nonoshita2020_population_mean&quot;,&quot;label&quot;:&quot;Nonoshita_2020_population_mean&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_doripenem/Doripenem_Nonoshita2020_population_mean.md&quot;,&quot;status&quot;:&quot;extracted&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Doripenem_Tanaka2017_based_on_ppk_model&quot;,&quot;label&quot;:&quot;Tanaka_2017_based_on_ppk_model&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_doripenem/Doripenem_Tanaka2017_based_on_ppk_model.md&quot;,&quot;status&quot;:&quot;extracted&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Doripenem_Tanaka2017_bayesian_estimated&quot;,&quot;label&quot;:&quot;Tanaka_2017_bayesian_estimated&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_doripenem/Doripenem_Tanaka2017_bayesian_estimated.md&quot;,&quot;status&quot;:&quot;extracted&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Doripenem_Wang2022_reference&quot;,&quot;label&quot;:&quot;Wang_2022_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_doripenem/Doripenem_Wang2022_reference.md&quot;,&quot;status&quot;:&quot;extracted&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

# doripenem

- **generic name:** doripenem
- **ATC codes:** `J01DH04`
- **DrugBank:** [DB06211](https://go.drugbank.com/drugs/DB06211) · **PubChem:** [CID 73303](https://pubchem.ncbi.nlm.nih.gov/compound/73303)
- **molar mass:** 420.504 g/mol (C15H24N4O6S2) — DrugBank
- **groups:** approved, withdrawn

## About

Doripenem is a carbapenem antibiotic that was used to treat bacterial infections, including pneumonia, urinary tract infections, and hospital-acquired infections. It is no longer marketed in the European Union, where its product has been withdrawn.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q411552](https://www.wikidata.org/wiki/Q411552) and the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## Molecules and molar masses

> The molar mass each model uses to convert mass to molar concentration and to form a metabolite molecule for molecule. Looked up, never estimated: DrugBank for the drug, the paper's own value or the PubChem entry matched to the paper's name for a metabolite.

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| doripenem | parent | 420.504 | C15H24N4O6S2 | DrugBank | [73303](https://pubchem.ncbi.nlm.nih.gov/compound/73303) | Nonoshita_2020, Tanaka_2017 |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 10:43 | 4:45 | 5/1/0 | 1/0/0 | 0/0/0 | 203,996/15,881 | einfracz / qwen3.8-27b | 8 | 2/6 | 8/0 | 2 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> | [Nonoshita_2020_base_model](drugs/drug_doripenem/Doripenem_Nonoshita2020_base_model.md) | ▶ model + simulator | 2-compartment, IV | 5 | Nonoshita K et al., Population pharmacokinetic analysis of…, Scientific reports (2020) | [10.1038/s41598-020-79076-6](https://doi.org/10.1038/s41598-020-79076-6) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Nonoshita_2020_population_mean](drugs/drug_doripenem/Doripenem_Nonoshita2020_population_mean.md) | ▶ model + simulator | 2-compartment, IV | 5 | Nonoshita K et al., Population pharmacokinetic analysis of…, Scientific reports (2020) | [10.1038/s41598-020-79076-6](https://doi.org/10.1038/s41598-020-79076-6) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Tanaka_2017_based_on_ppk_model](drugs/drug_doripenem/Doripenem_Tanaka2017_based_on_ppk_model.md) | ▶ model + simulator | 2-compartment, IV | 4 | Tanaka R et al., Pharmacokinetic/Pharmacodynamic Analysi…, Biological & pharmaceutical… (2017) | [10.1248/bpb.b17-00008](https://doi.org/10.1248/bpb.b17-00008) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Tanaka_2017_bayesian_estimated](drugs/drug_doripenem/Doripenem_Tanaka2017_bayesian_estimated.md) | ▶ model + simulator | 2-compartment, IV | 4 | Tanaka R et al., Pharmacokinetic/Pharmacodynamic Analysi…, Biological & pharmaceutical… (2017) | [10.1248/bpb.b17-00008](https://doi.org/10.1248/bpb.b17-00008) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Wang_2022_reference](drugs/drug_doripenem/Doripenem_Wang2022_reference.md) | ▶ model + simulator | 2-compartment, oral | 4 | Wang Y et al., Pharmacokinetics and Safety of Doripene…, Antibiotics (Basel, Switzer… (2022) | [10.3390/antibiotics11070958](https://doi.org/10.3390/antibiotics11070958) |
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: missing key parameters — none reported by this paper</sub><br><sub>route_to: `human_review`</sub> | [Ikawa_2009_reference](drugs/drug_doripenem/Doripenem_Ikawa2009_reference.md) | — | 1-compartment (no model) | 0 | Ikawa K et al., Pharmacokinetic-pharmacodynamic target…, International journal of an… (2009) | [10.1016/j.ijantimicag.2008.08.031](https://doi.org/10.1016/j.ijantimicag.2008.08.031) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="Animal study (mouse), not measured in people (from keyword rules on the title and abstract — no LLM answer yet).">mouse</span> | [Soon_2013_bacterial_burden](drugs/drug_doripenem/pd_Soon_2013_bacterial_burden.md) | bacterial burden ← doripenem · direct sigmoid Emax (Hill) effect | — | Soon RL et al., Pharmacodynamic variability beyond that…, Antimicrobial agents and ch… (2013) | [10.1128/AAC.01224-12](https://doi.org/10.1128/AAC.01224-12) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=doripenem) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| excretion | kidney | `SLC22A8` substrate | DrugBank actor |

<sub>Actors without a tissue in the table: DPEP1 (substrate).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 54 matched, 20 returned
- **screened:** 3  ·  **relevant:** 3
- **records:** 6  ·  extracted 5  ·  needs_review 0  ·  rejected 1  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full text wanted

_3 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Chung_2017.pdf` | Chung EK et al., Population Pharmacokinetics and Pharmac…, The Annals of pharmacothera… (2017) | popPK | 10 | [10.1177/1060028016676831](https://doi.org/10.1177/1060028016676831) | [28168884](https://pubmed.ncbi.nlm.nih.gov/28168884) | The paper reports a population PK model for doripenem, but specific numeric parameter values (CL, V, Q, half-life) are described qualitatively or by association, and the actual values are likely in the results tables or supplementary material not included in the evidence. |
| `Ikawa_2009.pdf` | Ikawa K et al., Pharmacokinetic-pharmacodynamic target…, International journal of an… (2009) | popPK | 10 | [10.1016/j.ijantimicag.2008.08.031](https://doi.org/10.1016/j.ijantimicag.2008.08.031) | [19095418](https://pubmed.ncbi.nlm.nih.gov/19095418) | The study reports a quantitative two-compartment population PK model for doripenem with explicit numeric values for clearance, volume, and intercompartmental clearance in the abstract. |
| `Harada_2013.pdf` | Harada M et al., Pharmacokinetic analysis of doripenem i…, International journal of an… (2013) | popPK | 8 | [10.1016/j.ijantimicag.2013.03.012](https://doi.org/10.1016/j.ijantimicag.2013.03.012) | [23684002](https://pubmed.ncbi.nlm.nih.gov/23684002) | The paper reports non-compartmental PK metrics (Cmax, AUC, t1/2) and identifies covariates, but specific compartmental parameter values (CL, V, Q) are not listed in the provided text. |

<sub>queue written 2026-10-07T10:40:07.590594+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Chung_2017 | relevant | 10 | 2 | The paper reports a population PK model for doripenem, but specific numeric parameter values (CL, V, Q, half-life) are described qualitatively or by association, and the actual values are likely in the results tables or supplementary material not included in the evidence. |
| popPK | DeLouise_2023 | irrelevant | 0 | 0 | The paper is a radioprotection study using doripenem as a candidate drug in mice, and it does not report any quantitative pharmacokinetic parameters (CL, V, etc.) for doripenem. |
| popPK | Harada_2013 | relevant | 8 | 2 | The paper reports non-compartmental PK metrics (Cmax, AUC, t1/2) and identifies covariates, but specific compartmental parameter values (CL, V, Q) are not listed in the provided text. |
| popPK | Katsube_2008 | irrelevant | 4 | 0 | The study focuses on PD modeling and simulation for bactericidal effects in mice; while it uses doripenem PK data, the abstract does not report specific quantitative PK parameter values (CL, V, etc.) for doripenem, and the primary focus is on meropenem and imipenem indices. |
| popPK | Lim_2018 | irrelevant | 2 | 0 | The study uses Monte Carlo simulation with PK parameters cited from other sources to evaluate dosing regimens and cost-effectiveness, but does not report original quantitative PK parameter values for doripenem. |
| popPK | Morales_2022 | irrelevant | 1 | 0 | This is a scoping review of beta-lactam PK/PD targets in children; doripenem is mentioned as one of several drugs studied in the literature, but no specific quantitative PK parameters for doripenem are reported in the text. |
| popPK | Piraino_2025 | irrelevant | 0 | 0 | The study investigates doripenem as a radioprotective agent in mice and reports efficacy metrics (EC50, radiation damage foci), but contains no pharmacokinetic parameters (CL, V, half-life) or dose-time data for doripenem. |
| popPK | Tanaka_2025 | irrelevant | 3 | 0 | This is a review article that summarizes multiple studies, including a population PK model for doripenem in ICU patients, but no specific numeric parameter values (e.g., CL, V, Q) are provided in the text, only qualitative descriptions of model development and simulation outcomes. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-07 10:40 UTC</sub>
