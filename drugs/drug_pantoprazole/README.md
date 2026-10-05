<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;A02B&quot;,&quot;href&quot;:&quot;atc/A02B.md&quot;},{&quot;label&quot;:&quot;pantoprazole&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Pantoprazole_Olivarez2020_reference&quot;,&quot;label&quot;:&quot;Olivarez_2020_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_pantoprazole/Pantoprazole_Olivarez2020_reference.md&quot;,&quot;status&quot;:&quot;reviewed \u2014 candidate&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Pantoprazole_Smith2021v2_reference&quot;,&quot;label&quot;:&quot;Smith_2021_2_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_pantoprazole/Pantoprazole_Smith2021v2_reference.md&quot;,&quot;status&quot;:&quot;reviewed \u2014 candidate&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Pantoprazole_McCann2023_reference&quot;,&quot;label&quot;:&quot;McCann_2023_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_pantoprazole/Pantoprazole_McCann2023_reference.md&quot;,&quot;status&quot;:&quot;needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Pantoprazole_Pettersen2009_reference&quot;,&quot;label&quot;:&quot;Pettersen_2009_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_pantoprazole/Pantoprazole_Pettersen2009_reference.md&quot;,&quot;status&quot;:&quot;needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

# pantoprazole

- **generic name:** pantoprazole
- **ATC codes:** `A02BC02`
- **DrugBank:** [DB00213](https://go.drugbank.com/drugs/DB00213) · **PubChem:** [CID 4679](https://pubchem.ncbi.nlm.nih.gov/compound/4679)
- **molar mass:** 383.37 g/mol (C16H15F2N3O4S) — DrugBank
- **groups:** approved, investigational

## About

Pantoprazole is a proton-pump inhibitor used to treat acid-related stomach problems such as peptic ulcers, gastritis, gastroesophageal reflux disease, and Zollinger–Ellison syndrome. It is approved and widely used, with authorised products in the European Union mainly for reflux conditions.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q286846](https://www.wikidata.org/wiki/Q286846) and the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## Molecules and molar masses

> The molar mass each model uses to convert mass to molar concentration and to form a metabolite molecule for molecule. Looked up, never estimated: DrugBank for the drug, the paper's own value or the PubChem entry matched to the paper's name for a metabolite.

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| pantoprazole | parent | 383.37 | C16H15F2N3O4S | DrugBank | [4679](https://pubchem.ncbi.nlm.nih.gov/compound/4679) | Pettersen_2009 |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-04 11:15 | 16:06 | 2/3/5 | 2/0/0 | 0/0/0 | 203,711/56,086 | ollama / qwen3.8:27b-mtp-q8_0 | 19 | 3/4 | 7/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">reviewed — candidate</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss:120b (partly confirmed, agreement 0.846). The first reading is what the record holds.">cross-check: partial</span> <span class="pk-badge pk-badge--species" title="Animal study (cattle), not measured in people (from an LLM reading of the title and abstract by gpt-6-luna, p(non-human) 1.00).">cattle</span> | [Olivarez_2020_reference](drugs/drug_pantoprazole/Pantoprazole_Olivarez2020_reference.md) | ▶ model + simulator | 1-compartment, IV | 2 | Olivarez JD et al., Pharmacokinetics and Tissue Levels of P…, Frontiers in veterinary sci… (2020) | [10.3389/fvets.2020.580735](https://doi.org/10.3389/fvets.2020.580735) |
| <span class="pk-badge pk-badge--green">reviewed — candidate</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.857). The first reading is what the record holds.">cross-check: disputed</span> <span class="pk-badge pk-badge--species" title="Animal study (goat), not measured in people (from an LLM reading of the title and abstract by gpt-6-luna, p(non-human) 1.00).">goat</span> | [Smith_2021_2_reference](drugs/drug_pantoprazole/Pantoprazole_Smith2021v2_reference.md) | ▶ model + simulator | 1-compartment, IV | 2 | Smith JS et al., Pharmacokinetics of Pantoprazole and Pa…, Frontiers in veterinary sci… (2021) | [10.3389/fvets.2021.744813](https://doi.org/10.3389/fvets.2021.744813) |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--orange" title="a second model re-read this paper; the two readings agree on 0.0 of the compared fields. The first reading is what the record holds.">cross-check: partial</span><br><sub>blocking: C5 dimensioned parameter(s) without a unit: Q32, Q74, Q57, Q22, Q61 — no SI val…</sub><br><sub>blocking: C6_cl_magnitude failed (ratio None)</sub><br><sub>route_to: `human_review`</sub> | [Grafeneder_2024_hdp](drugs/drug_pantoprazole/Pantoprazole_Grafeneder2024_hdp.md) | — | parent + metabolite (no model) | 6 | Grafeneder J et al., Prospective Trial on the Pharmacokineti…, Kidney international reports (2024) | [10.1016/j.ekir.2024.07.029](https://doi.org/10.1016/j.ekir.2024.07.029) |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--orange" title="a second model re-read this paper; the two readings agree on 0.0 of the compared fields. The first reading is what the record holds.">cross-check: partial</span><br><sub>blocking: C5 dimensioned parameter(s) without a unit: Q32, Q74, Q57, Q22, Q61 — no SI val…</sub><br><sub>route_to: `human_review`</sub> | [Grafeneder_2024_hv](drugs/drug_pantoprazole/Pantoprazole_Grafeneder2024_hv.md) | — | parent + metabolite (no model) | 6 | Grafeneder J et al., Prospective Trial on the Pharmacokineti…, Kidney international reports (2024) | [10.1016/j.ekir.2024.07.029](https://doi.org/10.1016/j.ekir.2024.07.029) |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.353). The first reading is what the record holds.">cross-check: disputed</span><br><sub>blocking: unreported model parameter default(s): F</sub><br><sub>route_to: `scholar`</sub> | [McCann_2023_reference](drugs/drug_pantoprazole/Pantoprazole_McCann2023_reference.md) | ▶ model + simulator | 1-compartment, oral | 4 | McCann S et al., Population Pharmacokinetics of Posacona…, Clinical pharmacokinetics (2023) | [10.1007/s40262-023-01254-2](https://doi.org/10.1007/s40262-023-01254-2) |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.533). The first reading is what the record holds.">cross-check: disputed</span> <span class="pk-badge pk-badge--species" title="Animal study (cattle), not measured in people (from an LLM reading of the title and abstract by gpt-6-luna, p(non-human) 1.00).">cattle</span><br><sub>blocking: C6_cl_magnitude failed (ratio None)</sub><br><sub>route_to: `human_review`</sub> | [Olivarez_2022_2_reference](drugs/drug_pantoprazole/Pantoprazole_Olivarez2022v2_reference.md) | — | 1-compartment (no model) | 2 | Olivarez JD et al., Pharmacokinetic and pharmacodynamic pro…, Frontiers in veterinary sci… (2022) | [10.3389/fvets.2022.1101461](https://doi.org/10.3389/fvets.2022.1101461) |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.429). The first reading is what the record holds.">cross-check: disputed</span><br><sub>caveat: the record defines covariate effects (weight on clearance, renal function …) but the engineer simulated only…</sub><br><sub>blocking: T1_t_half_beta</sub><br><sub>blocking: unreported model parameter default(s): F</sub><br><sub>route_to: `scholar`</sub> | [Pettersen_2009_reference](drugs/drug_pantoprazole/Pantoprazole_Pettersen2009_reference.md) | ▶ model + simulator | 2-compartment, oral | 6 (+3 cov.) | Pettersen G et al., Population pharmacokinetics of intraven…, British journal of clinical… (2009) | [10.1111/j.1365-2125.2008.03328.x](https://doi.org/10.1111/j.1365-2125.2008.03328.x) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--orange" title="a second model re-read this paper; the two readings agree on 0.0 of the compared fields. The first reading is what the record holds.">cross-check: partial</span><br><sub>blocking: missing key parameters — none reported by this paper</sub><br><sub>route_to: `human_review`</sub> | [Grafeneder_2024_hdp_n_17](drugs/drug_pantoprazole/Pantoprazole_Grafeneder2024_hdp_n_17.md) | — | parent + metabolite (no model) | 0 (+4 cov.) | Grafeneder J et al., Prospective Trial on the Pharmacokineti…, Kidney international reports (2024) | [10.1016/j.ekir.2024.07.029](https://doi.org/10.1016/j.ekir.2024.07.029) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--orange" title="a second model re-read this paper; the two readings agree on 0.0 of the compared fields. The first reading is what the record holds.">cross-check: partial</span><br><sub>blocking: missing key parameters — none reported by this paper</sub><br><sub>route_to: `human_review`</sub> | [Grafeneder_2024_hv_n_16](drugs/drug_pantoprazole/Pantoprazole_Grafeneder2024_hv_n_16.md) | — | parent + metabolite (no model) | 0 (+3 cov.) | Grafeneder J et al., Prospective Trial on the Pharmacokineti…, Kidney international reports (2024) | [10.1016/j.ekir.2024.07.029](https://doi.org/10.1016/j.ekir.2024.07.029) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss:120b (primary re-run, agreement 0.4). The first reading is what the record holds.">cross-check: partial</span><br><sub>blocking: missing key parameters — none reported by this paper</sub><br><sub>route_to: `human_review`</sub> | [Knebel_2011_reference](drugs/drug_pantoprazole/Pantoprazole_Knebel2011_reference.md) | — | 1-compartment (no model) | 0 | Knebel W et al., Population pharmacokinetic modeling of…, Journal of clinical pharmac… (2011) | [10.1177/0091270010366146](https://doi.org/10.1177/0091270010366146) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="The paper reports both human and animal data (from the LLM relevance screen, p(non-human) 0.50).">human + animal</span> | [Ferron_2001_gastric_acid_secretion](drugs/drug_pantoprazole/pd_Ferron_2001_gastric_acid_secretion.md) | gastric acid secretion ← pantoprazole · target-mediated drug disposition | — | Ferron GM et al., Pharmacodynamic modeling of pantoprazol…, Journal of clinical pharmac… (2001) | [10.1177/00912700122009953](https://doi.org/10.1177/00912700122009953) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Katashima_1998_inhibitory_effects_on_gastric_acid_secretion](drugs/drug_pantoprazole/pd_Katashima_1998_inhibitory_effects_on_gastric_acid_secretion.md) | inhibitory effects on gastric acid secretion ← pantoprazole · target-mediated drug disposition | — | Katashima M et al., Comparative pharmacokinetic/pharmacodyn…, European journal of drug me… (1998) | [10.1007/BF03189822](https://doi.org/10.1007/BF03189822) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=pantoprazole) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | blood-brain barrier | `ABCB1` inhibitor/substrate, `ABCG2` inhibitor/substrate | DrugBank actor |
| absorption | kidney | `ABCB1` inhibitor/substrate | DrugBank actor |
| absorption | liver | `ABCB1` inhibitor/substrate, `ABCG2` inhibitor/substrate | DrugBank actor |
| absorption | mammary gland | `ABCG2` inhibitor/substrate | DrugBank actor |
| absorption | placenta | `ABCB1` inhibitor/substrate | DrugBank actor |
| absorption | small intestine | `ABCB1` inhibitor/substrate, `ABCG2` inhibitor/substrate | DrugBank actor |
| absorption | stomach | <sub>named in DrugBank's ADME text</sub> | prose |
| absorption | testis | `ABCB1` inhibitor/substrate, `ABCG2` inhibitor/substrate | DrugBank actor |
| metabolism | bile duct | <sub>named in DrugBank's ADME text</sub> | prose |
| metabolism | kidney | <sub>named in DrugBank's ADME text</sub> | prose |
| metabolism | liver | `CYP2C19` inhibitor/substrate, `CYP3A4` substrate | DrugBank actor |
| metabolism | small intestine | `CYP3A4` substrate | DrugBank actor |
| excretion | bile duct | <sub>named in DrugBank's ADME text</sub> | prose |
| excretion | kidney | `SLC22A8` inhibitor | DrugBank actor |

<sub>Actors without a tissue in the table: ATP4A (inhibitor), ATP4B (modulator), DDAH1 (inhibitor).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 28 matched, 15 returned
- **screened:** 6  ·  **relevant:** 6
- **records:** 10  ·  extracted 2  ·  needs_review 5  ·  rejected 3  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full text wanted

_3 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Fadel_2024.pdf` | Fadel C et al., Comparative pharmacokinetics of intrave…, Veterinary journal (London,… (2024) | popPK | 10 | [10.1016/j.tvjl.2024.106138](https://doi.org/10.1016/j.tvjl.2024.106138) | [38761957](https://pubmed.ncbi.nlm.nih.gov/38761957) | The study reports quantitative PK parameters (Cl, Vd, t1/2) for pantoprazole in sheep and goats, but the specific numeric values are not present in the provided abstract text. |
| `Knebel_2011.pdf` | Knebel W et al., Population pharmacokinetic modeling of…, Journal of clinical pharmac… (2011) | popPK | 10 | [10.1177/0091270010366146](https://doi.org/10.1177/0091270010366146) | [20484619](https://pubmed.ncbi.nlm.nih.gov/20484619) | The abstract provides specific quantitative values for the typical clearance (CL) and confidence intervals from a population PK model. |
| `Ferron_2001.pdf` | Ferron GM et al., Pharmacodynamic modeling of pantoprazol…, Journal of clinical pharmac… (2001) | popPK | 8 | [10.1177/00912700122009953](https://doi.org/10.1177/00912700122009953) | [11210394](https://pubmed.ncbi.nlm.nih.gov/11210394) | The study reports pantoprazole pharmacokinetics in humans and rats, but the evidence only provides half-lives (0.5 h in rats, 0.8 h in humans) and pharmacodynamic rate constants, lacking explicit clearance, volume, or compartmental model parameters. |

<sub>queue written 2026-10-04T11:00:55.679612+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Albitar_2026 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of clozapine and norclozapine, with pantoprazole serving only as a co-administered agent to assess drug-drug interactions, and no PK parameters for pantoprazole itself are reported. |
| popPK | Fadel_2024 | relevant | 10 | 2 | The study reports quantitative PK parameters (Cl, Vd, t1/2) for pantoprazole in sheep and goats, but the specific numeric values are not present in the provided abstract text. |
| popPK | Ferron_2001 | relevant | 8 | 2 | The study reports pantoprazole pharmacokinetics in humans and rats, but the evidence only provides half-lives (0.5 h in rats, 0.8 h in humans) and pharmacodynamic rate constants, lacking explicit clearance, volume, or compartmental model parameters. |
| popPK | Katashima_1998 | irrelevant | 2 | 0 | The study reports PK/PD parameters (reaction rate constants, turnover rates) for acid inhibition rather than standard disposition parameters (CL, V, ka) for pantoprazole. |
| popPK | Kirchheiner_2009_2 | irrelevant | 0 | 0 | The paper is a pharmacodynamic meta-analysis of gastric pH effects and does not report pharmacokinetic parameters (CL, V, ka) for pantoprazole. |
| PD | Knebel_2011 | not_relevant | 0 | 0 | The paper reports a population pharmacokinetic (PK) model for pantoprazole, including covariate effects on clearance, but does not report any pharmacodynamic (PD) or exposure-response relationship. |
| popPK | Litalien_2005 | irrelevant | 2 | 0 | This is a review article that discusses pharmacokinetic trends qualitatively but does not provide specific numeric parameter values for pantoprazole. |
| popPK | McCann_2023 | irrelevant | 0 | 0 | The study characterizes the population pharmacokinetics of posaconazole, with pantoprazole serving only as a co-administered covariate affecting bioavailability. |
| popPK | Prinz_1994 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of gastrin effects on rat ECL cells, where pantoprazole is used only as a negative control and no pharmacokinetic parameters are reported. |
| PD | Prinz_1994 | not_relevant | 0 | 0 | The study reports that pantoprazole did not affect BrdU incorporation in isolated ECL cells, providing no numeric PD parameters or exposure-response relationship for the drug. |
| popPK | Simon_2015 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics and pharmacodynamics of clopidogrel, with pantoprazole serving only as a co-administered comparator agent rather than the subject drug. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-04 11:01 UTC</sub>
