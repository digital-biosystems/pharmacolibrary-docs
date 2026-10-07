<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N06A&quot;,&quot;href&quot;:&quot;atc/N06A.md&quot;},{&quot;label&quot;:&quot;moclobemide&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Moclobemide_Gwka2019_reference&quot;,&quot;label&quot;:&quot;G\u0142\u00f3wka_2019_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_moclobemide/Moclobemide_Gwka2019_reference.md&quot;,&quot;status&quot;:&quot;extracted \u00b7 stale&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

# moclobemide

- **generic name:** moclobemide
- **ATC codes:** `N06AG02`
- **DrugBank:** [DB01171](https://go.drugbank.com/drugs/DB01171) · **PubChem:** [CID 4235](https://pubchem.ncbi.nlm.nih.gov/compound/4235)
- **molar mass:** 268.739 g/mol (C13H17ClN2O2) — DrugBank
- **groups:** approved, investigational

## About

Moclobemide is an antidepressant that works as a reversible inhibitor of monoamine oxidase A. It is an approved medicine, used in several countries for depression, though it is not authorised centrally in the European Union.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q421934](https://www.wikidata.org/wiki/Q421934) and the WHO ATC classification; not checked by a person.</small>

## Molecules and molar masses

> The molar mass each model uses to convert mass to molar concentration and to form a metabolite molecule for molecule. Looked up, never estimated: DrugBank for the drug, the paper's own value or the PubChem entry matched to the paper's name for a metabolite.

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| moclobemide | parent | 268.739 | C13H17ClN2O2 | DrugBank | [4235](https://pubchem.ncbi.nlm.nih.gov/compound/4235) | Raaflaub_1984 |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-06 23:42 | 0:44 | 1/1/0 | 0/0/1 | 0/0/0 | 49,596/2,355 | ollama / glm-5.3-flash | 18 | 3/0 | 2/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.643). The first reading is what the record holds.">cross-check: disputed</span><br><sub>STALE — current validate: extracted</sub><br><sub>route_to: `engineer_replication`</sub> | [Główka_2019_reference](drugs/drug_moclobemide/Moclobemide_Gwka2019_reference.md) | ▶ model + simulator | 1-compartment, oral | 3 | Główka FK et al., Bioavailability of moclobemide from two…, Die Pharmazie (2019) | [10.1691/ph.2019.8819](https://doi.org/10.1691/ph.2019.8819) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss:120b (partly confirmed, agreement 0.4). The first reading is what the record holds.">cross-check: partial</span><br><sub>STALE — current validate: rejected</sub><br><sub>blocking: C5 dimension mismatch on a structural parameter</sub><br><sub>route_to: `human_review`</sub> | [Raaflaub_1984_reference](drugs/drug_moclobemide/Moclobemide_Raaflaub1984_reference.md) | — | 1-compartment (no model) | 6 | Raaflaub J et al., Single-dose pharmacokinetics of the MAO…, Arzneimittel-Forschung (1984) | — |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--orange">needs review</span> | [Birkett_1995_u](drugs/drug_moclobemide/pd_Birkett_1995_u.md) | Utilisation (market uptake) ← moclobemide · direct sigmoid Emax (Hill) effect | model (no simulator) | Birkett DJ et al., Modelling the market uptake of new drug…, British journal of clinical… (1995) | [10.1111/j.1365-2125.1995.tb04565.x](https://doi.org/10.1111/j.1365-2125.1995.tb04565.x) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=moclobemide) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | liver | <sub>named in DrugBank's ADME text</sub> | prose |
| absorption | small intestine | <sub>named in DrugBank's ADME text</sub> | prose |
| metabolism | brain | `CYP2D6` inhibitor/substrate, `MAOA` inhibitor/target, `MAOB` inhibitor/target | DrugBank actor |
| metabolism | liver | `CYP2C19` inhibitor/substrate, `CYP2C9` substrate, `CYP2D6` inhibitor/substrate, `MAOA` inhibitor/target | DrugBank actor |
| metabolism | platelet | `MAOB` inhibitor/target | DrugBank actor |
| metabolism | small intestine | `MAOA` inhibitor/target | DrugBank actor |
| excretion | kidney | <sub>named in DrugBank's ADME text</sub> | prose |

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 9 matched, 9 returned
- **screened:** 2  ·  **relevant:** 2
- **records:** 2  ·  extracted 1  ·  needs_review 0  ·  rejected 1  ·  stale 2
- **scholar-agent fallback query used:** True

## Full text wanted

_2 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Raaflaub_1984.pdf` | Raaflaub J et al., Single-dose pharmacokinetics of the MAO…, Arzneimittel-Forschung (1984) | popPK | 10 | not captured | [6538424](https://pubmed.ncbi.nlm.nih.gov/6538424) | Reports quantitative PK parameters (t½β, Vss, bioavailability, absorption) for moclobemide in humans, though some values are given only as ranges/means in the abstract. |
| `Dingemanse_1996_2.pdf` | Dingemanse J et al., Pharmacokinetic-pharmacodynamic interac…, Clinical neuropharmacology (1996) | popPK | 5 | [10.1097/00002826-199619050-00003](https://doi.org/10.1097/00002826-199619050-00003) | [8889283](https://pubmed.ncbi.nlm.nih.gov/8889283) | Human steady-state PK of moclobemide and its metabolites is the subject, but no numeric parameter values appear in the evidence. |

<sub>queue written 2026-10-06T23:42:30.737659+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Baumann_1996_2 | irrelevant | 0 | 0 | Review of SSRI pharmacokinetics; moclobemide only mentioned as co-medication, no quantitative PK parameters for it. |
| PD | Baumann_1996_2 | not_relevant | 0 | 0 | The text is a review of SSRIs and mentions moclobemide only in the context of drug interactions and safety, without reporting any pharmacodynamic or exposure-response data. |
| popPK | Birkett_1995 | irrelevant | 0 | 0 | This is a drug utilisation/market uptake modelling study, not a pharmacokinetic study; moclobemide is only one of five drugs whose sales trends were modelled. |
| PD | Birkett_1995 | not_relevant | 0 | 0 | The paper applies a sigmoid Emax model to market uptake (utilization over time) data, not pharmacodynamic exposure-response or dose-response relationships. |
| popPK | Boland_2003 | irrelevant | 0 | 0 | In-vitro neuroprotection study of pirlindole; moclobemide is only an ineffective comparator with no PK parameters. |
| PD | Boland_2003 | not_relevant | 0 | 0 | The paper reports that moclobemide was ineffective in the cell survival assay, providing no numeric PD parameters or concentration-effect relationship for the drug. |
| popPK | Cooper_2023 | irrelevant | 0 | 0 | Moclobemide is only a co-ingested risk factor in a serotonin toxicity outcome model; no PK parameters for moclobemide are reported. |
| popPK | Dingemanse_1996 | irrelevant | not captured | not captured | no extractable full text |
| popPK | Dingemanse_1996_2 | relevant | 5 | 2 | Human steady-state PK of moclobemide and its metabolites is the subject, but no numeric parameter values appear in the evidence. |
| PD | Dingemanse_1996_2 | not_relevant | 3 | 2 | The study reports qualitative PD interactions and changes in biomarkers (DHPG, serotonin) but does not provide numeric PD parameters (Emax, EC50) or a quantitative concentration-effect model. |
| popPK | Fox_2010 | irrelevant | 2 | 3 | Moclobemide is only a co-administered MAOI-A perturbing a compartmental model of sumatriptan; no moclobemide disposition parameters are reported. |
| popPK | Ginovart_2006 | irrelevant | 1 | 1 | This is a PET receptor-binding study of [11C]-harmine with moclobemide only as a blocking agent; no moclobemide PK parameters (CL, V, ka) are reported. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-06 23:42 UTC</sub>
