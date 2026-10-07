<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;R06A&quot;,&quot;href&quot;:&quot;atc/R06A.md&quot;},{&quot;label&quot;:&quot;bilastine&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Bilastine_Togawa2016_caucasianb_5&quot;,&quot;label&quot;:&quot;Togawa_2016_caucasianb_5&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_bilastine/Bilastine_Togawa2016_caucasianb_5.md&quot;,&quot;status&quot;:&quot;extracted&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Bilastine_Togawa2016_japanesea&quot;,&quot;label&quot;:&quot;Togawa_2016_japanesea&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_bilastine/Bilastine_Togawa2016_japanesea.md&quot;,&quot;status&quot;:&quot;extracted&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

# bilastine

- **generic name:** bilastine
- **ATC codes:** `R06AX29`, `S01GX13`
- **DrugBank:** [DB11591](https://go.drugbank.com/drugs/DB11591) · **PubChem:** [CID 185460](https://pubchem.ncbi.nlm.nih.gov/compound/185460)
- **molar mass:** 463.622 g/mol (C28H37N3O3) — DrugBank
- **groups:** approved

## About

Bilastine is an antihistamine used to treat allergic conditions such as allergic rhinitis and urticaria. It is an approved medicine and is widely used, including as eye drops for allergic eye symptoms.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q2902977](https://www.wikidata.org/wiki/Q2902977) and the WHO ATC classification; not checked by a person.</small>

## Molecules and molar masses

> The molar mass each model uses to convert mass to molar concentration and to form a metabolite molecule for molecule. Looked up, never estimated: DrugBank for the drug, the paper's own value or the PubChem entry matched to the paper's name for a metabolite.

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| bilastine | parent | 463.622 | C28H37N3O3 | DrugBank | [185460](https://pubchem.ncbi.nlm.nih.gov/compound/185460) | Kim_2021, Togawa_2016 |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 22:41 | 4:31 | 2/0/1 | 0/0/2 | 0/0/0 | 81,614/10,588 | ollama / qwen3.8:27b-mtp-q8_0 | 2 | 0/2 | 2/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> | [Togawa_2016_caucasianb_5](drugs/drug_bilastine/Bilastine_Togawa2016_caucasianb_5.md) | ▶ model + simulator | 2-compartment, oral | 5 | Togawa M et al., Pharmacokinetics, Pharmacodynamics and…, Clinical drug investigation (2016) | [10.1007/s40261-016-0447-2](https://doi.org/10.1007/s40261-016-0447-2) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Togawa_2016_japanesea](drugs/drug_bilastine/Bilastine_Togawa2016_japanesea.md) | ▶ model + simulator | 2-compartment, oral | 5 | Togawa M et al., Pharmacokinetics, Pharmacodynamics and…, Clinical drug investigation (2016) | [10.1007/s40261-016-0447-2](https://doi.org/10.1007/s40261-016-0447-2) |
| <span class="pk-badge pk-badge--orange">needs review</span><br><sub>blocking: C5 dimensioned parameter(s) without a unit: Q22, Q63 — no SI value to build from</sub><br><sub>route_to: `human_review`</sub> | [Kim_2021_reference](drugs/drug_bilastine/Bilastine_Kim2021_reference.md) | — | 3-compartment (no model) | 7 | Kim C et al., Application of a dual mechanistic appro…, CPT: pharmacometrics & syst… (2021) | [10.1002/psp4.12671](https://doi.org/10.1002/psp4.12671) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--orange">needs review</span> | [Jauregizar_2009_flare](drugs/drug_bilastine/pd_Jauregizar_2009_flare.md) | flare area ← bilastine · indirect response — drug inhibits the production of flare area | model (no simulator) | Jauregizar N et al., Pharmacokinetic-pharmacodynamic modelli…, Clinical pharmacokinetics (2009) | [10.2165/11317180-000000000-00000](https://doi.org/10.2165/11317180-000000000-00000) |
| <span class="pk-badge pk-badge--orange">needs review</span> | [Jauregizar_2009_wheal](drugs/drug_bilastine/pd_Jauregizar_2009_wheal.md) | wheal area ← bilastine · indirect response — drug inhibits the production of wheal area | model (no simulator) | Jauregizar N et al., Pharmacokinetic-pharmacodynamic modelli…, Clinical pharmacokinetics (2009) | [10.2165/11317180-000000000-00000](https://doi.org/10.2165/11317180-000000000-00000) |
| <span class="pk-badge pk-badge--orange">needs review</span> | [Togawa_2016_Flare](drugs/drug_bilastine/pd_Togawa_2016_Flare.md) | flare biomarker turnover ← bilastine | — | Togawa M et al., Pharmacokinetics, Pharmacodynamics and…, Clinical drug investigation (2016) | [10.1007/s40261-016-0447-2](https://doi.org/10.1007/s40261-016-0447-2) |
| <span class="pk-badge pk-badge--orange">needs review</span> | [Togawa_2016_Wheal](drugs/drug_bilastine/pd_Togawa_2016_Wheal.md) | wheal biomarker turnover ← bilastine | — | Togawa M et al., Pharmacokinetics, Pharmacodynamics and…, Clinical drug investigation (2016) | [10.1007/s40261-016-0447-2](https://doi.org/10.1007/s40261-016-0447-2) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=bilastine) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | blood-brain barrier | `SLCO1A2` substrate | DrugBank actor |
| absorption | liver | `SLCO2B1` inhibitor | DrugBank actor |
| absorption | small intestine | `SLCO1A2` substrate, `SLCO2B1` inhibitor | DrugBank actor |
| excretion | bile duct | <sub>named in DrugBank's ADME text</sub> | prose |
| excretion | kidney | <sub>named in DrugBank's ADME text</sub> | prose |

<sub>Actors without a tissue in the table: ABCB5 (inhibitor), ABCB5 (substrate), HRH1 (target).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 6 matched, 6 returned
- **screened:** 2  ·  **relevant:** 2
- **records:** 3  ·  extracted 2  ·  needs_review 1  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full text wanted

_2 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Vozmediano_2019.pdf` | Vozmediano V et al., Model-informed pediatric development ap…, European journal of pharmac… (2019) | popPK | 10 | [10.1016/j.ejps.2018.11.016](https://doi.org/10.1016/j.ejps.2018.11.016) | [30468868](https://pubmed.ncbi.nlm.nih.gov/30468868) | The paper describes a population PK model for bilastine in children, but the specific numeric parameter values (CL, V, etc.) are not present in the provided abstract text. |
| `Jauregizar_2009.pdf` | Jauregizar N et al., Pharmacokinetic-pharmacodynamic modelli…, Clinical pharmacokinetics (2009) | popPK | 9 | [10.2165/11317180-000000000-00000](https://doi.org/10.2165/11317180-000000000-00000) | [19705924](https://pubmed.ncbi.nlm.nih.gov/19705924) | The study is a population PK/PD modeling study of bilastine in humans, but the evidence only explicitly provides the absorption rate constant (ka) and PD parameters, while the core disposition parameters (CL, V, Q) are not numerically listed in the provided text. |

<sub>queue written 2026-10-07T22:37:40.837857+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Jauregizar_2009 | relevant | 9 | 4 | The study is a population PK/PD modeling study of bilastine in humans, but the evidence only explicitly provides the absorption rate constant (ka) and PD parameters, while the core disposition parameters (CL, V, Q) are not numerically listed in the provided text. |
| popPK | Vozmediano_2019 | relevant | 10 | 0 | The paper describes a population PK model for bilastine in children, but the specific numeric parameter values (CL, V, etc.) are not present in the provided abstract text. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-07 22:37 UTC</sub>
