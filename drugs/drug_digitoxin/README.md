<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;C01A&quot;,&quot;href&quot;:&quot;atc/C01A.md&quot;},{&quot;label&quot;:&quot;digitoxin&quot;}]"></div>

# digitoxin

- **generic name:** digitoxin
- **ATC codes:** `C01AA04`
- **DrugBank:** [DB01396](https://go.drugbank.com/drugs/DB01396) · **PubChem:** [CID 441207](https://pubchem.ncbi.nlm.nih.gov/compound/441207)
- **molar mass:** 764.9391 g/mol (C41H64O13) — DrugBank
- **groups:** approved, withdrawn

## About

Digitoxin is a cardiac glycoside used to treat atrial fibrillation, supraventricular tachycardia, and congestive heart failure. It has been withdrawn from use in some markets, though it remains an approved drug elsewhere.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q423890](https://www.wikidata.org/wiki/Q423890) and the WHO ATC classification; not checked by a person.</small>

## Molecules and molar masses

> The molar mass each model uses to convert mass to molar concentration and to form a metabolite molecule for molecule. Looked up, never estimated: DrugBank for the drug, the paper's own value or the PubChem entry matched to the paper's name for a metabolite.

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| digitoxin | parent | 764.939 | C41H64O13 | DrugBank | [441207](https://pubchem.ncbi.nlm.nih.gov/compound/441207) | Flasch_1979 |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-06 02:05 | 3:39 | 0/2/0 | 1/0/0 | 0/0/0 | 42,180/9,570 | ollama / qwen3.8:27b-mtp-q8_0 | 8 | 0/0 | 0/8 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.25). The first reading is what the record holds.">cross-check: disputed</span> <span class="pk-badge pk-badge--species" title="Animal study (cat), not measured in people (from an LLM reading of the title and abstract by gpt-6-luna, p(non-human) 1.00).">cat</span><br><sub>STALE — current validate: rejected</sub><br><sub>blocking: C9 clearance/volume outside physiological window (implausible magnitude — unit/…</sub><br><sub>route_to: `human_review`</sub> | [Flasch_1979_reference](drugs/drug_digitoxin/Digitoxin_Flasch1979_reference.md) | — | parent + metabolite (no model) | 1 | Flasch H et al., Pharmacokinetics of dihydrodigitoxin in…, Naunyn-Schmiedeberg's archi… (1979) | [10.1007/BF00500279](https://doi.org/10.1007/BF00500279) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--green" title="re-read by gpt-oss:120b (confirmed, agreement 1.0). The first reading is what the record holds.">cross-checked ✓</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">rat</span><br><sub>blocking: missing key parameters — none reported by this paper</sub><br><sub>route_to: `human_review`</sub> | [Pfleger_1975_reference](drugs/drug_digitoxin/Digitoxin_Pfleger1975_reference.md) | — | 1-compartment (no model) | 0 | Pfleger K et al., [Pharmacokinetics and action of digitox…, Archives internationales de… (1975) | — |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> | [Urtizberea_1991_RBC_K](drugs/drug_digitoxin/pd_Urtizberea_1991_RBC_K.md) | red blood cell K+ ← digitoxin · direct sigmoid Emax (Hill) effect | — | Urtizberea M et al., Relationship between red blood cell pot…, Pharmacology & toxicology (1991) | [10.1111/j.1600-0773.1991.tb01231.x](https://doi.org/10.1111/j.1600-0773.1991.tb01231.x) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=digitoxin) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | blood-brain barrier | `ABCB1` substrate, `SLCO1A2` inhibitor | DrugBank actor |
| absorption | kidney | `ABCB1` substrate | DrugBank actor |
| absorption | liver | `ABCB1` substrate | DrugBank actor |
| absorption | placenta | `ABCB1` substrate | DrugBank actor |
| absorption | small intestine | `ABCB1` substrate, `SLCO1A2` inhibitor | DrugBank actor |
| absorption | testis | `ABCB1` substrate | DrugBank actor |
| distribution | blood | `ALB` unknown | DrugBank actor |
| metabolism | liver | `CYP3A4` substrate | DrugBank actor |
| metabolism | small intestine | `CYP3A4` substrate | DrugBank actor |

<sub>Actors without a tissue in the table: ATP1A1 (inhibitor), ATP1A2 (inhibitor), ATP1A3 (inhibitor), ATP1B1 (inhibitor), ATP1B2 (inhibitor), ATP1B3 (inhibitor), CYP11A1 (inhibitor), SLCO4C1 (inhibitor).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 25 matched, 25 returned
- **screened:** 2  ·  **relevant:** 2
- **records:** 2  ·  extracted 0  ·  needs_review 0  ·  rejected 2  ·  stale 1
- **scholar-agent fallback query used:** not captured

## Full text wanted

_8 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Flasch_1979.pdf` | Flasch H et al., Pharmacokinetics of dihydrodigitoxin in…, Naunyn-Schmiedeberg's archi… (1979) | popPK | 9 | [10.1007/BF00500279](https://doi.org/10.1007/BF00500279) | [530320](https://pubmed.ncbi.nlm.nih.gov/530320) | The study reports quantitative pharmacokinetic parameters (half-lives, volume of distribution) for digitoxin in cats using a three-compartment model. |
| `Pfleger_1975.pdf` | Pfleger K et al., [Pharmacokinetics and action of digitox…, Archives internationales de… (1975) | popPK | 8 | not captured | [1164099](https://pubmed.ncbi.nlm.nih.gov/1164099) | The study reports quantitative compartmental parameters (half-lives, tissue/medium ratios) for digitoxin in isolated animal hearts. |
| `Ebner_1985.pdf` | Ebner F et al., Diffusion-controlled receptor occupancy…, Journal of molecular and ce… (1985) | pd | 4 | [10.1016/s0022-2828(85)80127-9](https://doi.org/10.1016/s0022-2828(85)80127-9) | [3001323](https://www.ncbi.nlm.nih.gov/pubmed/3001323) | metadata signals extractable PD data (concentration-effect) |
| `Fagoo_1985.pdf` | Fagoo M et al., Interaction of cardiodigin, endogenous…, Biochemical and biophysical… (1985) | pd | 4 | [10.1016/0006-291x(85)90187-1](https://doi.org/10.1016/0006-291x(85)90187-1) | [2990458](https://www.ncbi.nlm.nih.gov/pubmed/2990458) | metadata signals extractable PD data (EC50) |
| `Schneider_1992.pdf` | Schneider J et al., Cardiac effects of R 79595 and its isom…, Naunyn-Schmiedeberg's archi… (1992) | pd | 4 | [10.1007/BF00169014](https://doi.org/10.1007/BF00169014) | [1470228](https://www.ncbi.nlm.nih.gov/pubmed/1470228) | metadata signals extractable PD data (EC50) |
| `Urtizberea_1990.pdf` | Urtizberea M et al., Toxicokinetic-toxicodynamic models desc…, Toxicology in vitro : an in… (1990) | pd | 4 | [10.1016/0887-2333(90)90112-7](https://doi.org/10.1016/0887-2333(90)90112-7) | [20702226](https://www.ncbi.nlm.nih.gov/pubmed/20702226) | metadata signals extractable PD data (Emax) |
| `Gozalpour_2014.pdf` | Gozalpour E et al., Convallatoxin: a new P-glycoprotein sub…, European journal of pharmac… (2014) | pgx | 7 | [10.1016/j.ejphar.2014.09.031](https://doi.org/10.1016/j.ejphar.2014.09.031) | [25264938](https://www.ncbi.nlm.nih.gov/pubmed/25264938) | metadata signals extractable PGX data (ABCB1, PK/PD-context) |
| `Dragonas_2008.pdf` | Dragonas C et al., The association of ABCB1 polymorphisms…, European journal of clinica… (2008) | pgx | 5 | [10.1007/s00228-007-0418-x](https://doi.org/10.1007/s00228-007-0418-x) | [18080812](https://www.ncbi.nlm.nih.gov/pubmed/18080812) | metadata signals extractable PGX data (ABCB1) |

<sub>queue written 2026-10-06T02:02:16.685859+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| PGx | Breznock_1975 | not_relevant | 0 | 0 | The study investigates the effect of a drug-drug interaction (phenobarbital) on digitoxin PK, not a pharmacogenomic effect (gene variant/genotype). |
| popPK | Damm_1975 | irrelevant | 1 | 0 | The study is an in-vitro intestinal transport experiment measuring permeability coefficients and tissue uptake, not a pharmacokinetic study reporting disposition parameters like clearance or volume of distribution. |
| PGx | Dragonas_2008 | not_relevant | 5 | 8 | The study reports a null association between ABCB1 genotype and digitoxin serum concentrations, finding no significant pharmacogenomic effect. |
| popPK | Ebner_1985 | irrelevant | 0 | 0 | no_text gate: only 109 chars of text extracted (&lt; 400) |
| PD | Ebner_1985 | not_relevant | 0 | 0 | The paper discusses the theoretical mechanism of diffusion-controlled receptor occupancy for cardioactive steroids but does not report specific numeric PD parameters or exposure-response data for digitoxin. |
| popPK | Fagoo_1985 | irrelevant | 0 | 0 | no_text gate: only 112 chars of text extracted (&lt; 400) |
| PD | Fagoo_1985 | not_relevant | 0 | 0 | The paper focuses on the molecular interaction between cardiodigin and antibodies, not on pharmacodynamic exposure-response modeling or dose-effect analysis for digitoxin. |
| PGx | Gozalpour_2013 | not_relevant | 2 | 5 | The paper investigates the binding affinity of digitoxin to P-glycoprotein mutants in vitro, which is a mechanistic study rather than a report of a pharmacogenomic effect on a clinical PK or PD parameter. |
| PGx | Gozalpour_2014 | not_relevant | 0 | 0 | The paper investigates the transport of convallatoxin by P-glycoprotein and does not report pharmacogenomic effects on the PK/PD of digitoxin. |
| PGx | Gozalpour_2016 | not_relevant | 0 | 0 | The study characterizes P-glycoprotein transport of digitoxin in vitro but does not report pharmacogenomic effects of specific gene variants on PK/PD parameters. |
| popPK | Haustein_1983 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of pengitoxin, not digitoxin, which is only mentioned as a comparator. |
| PGx | Hengstler_1999 | not_relevant | 0 | 0 | The paper reviews interspecies differences in toxicity and metabolism but does not report specific pharmacogenomic effects of gene variants on digitoxin PK/PD parameters. |
| popPK | Hori_1988 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of palytoxin-induced potassium efflux where digitoxin is used only as a pharmacological inhibitor, not as the subject of a pharmacokinetic analysis. |
| PD | Hori_1988 | not_relevant | 1 | 1 | The paper reports a single concentration (10^-5 M) of digitoxin that inhibited the effect, but does not provide a dose-response curve, Emax, or EC50 for digitoxin itself. |
| popPK | Jelliffe_2014 | irrelevant | 2 | 0 | The paper is a review/analysis of literature and case reports using PK models to guide therapy, but it does not report original quantitative PK parameter values (CL, V, ka) for digitoxin, only effect compartment concentrations. |
| popPK | McGarry_1993 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of digoxin's effect on calcium channels, not a pharmacokinetic study of digitoxin. |
| popPK | Schneider_1992 | irrelevant | 0 | 0 | no_text gate: only 197 chars of text extracted (&lt; 400) |
| PD | Schneider_1992 | not_relevant | 0 | 0 | The paper focuses on the cardiac effects of phosphodiesterase III inhibitors (R 79595, etc.) and does not report pharmacodynamic or exposure-response data for digitoxin. |
| popPK | Su_2008 | irrelevant | 0 | 0 | The study investigates the in-vitro antiviral activity and mechanisms of digitoxin, not its pharmacokinetic disposition parameters. |
| popPK | Urtizberea_1990 | irrelevant | 0 | 0 | no_text gate: only 154 chars of text extracted (&lt; 400) |
| popPK | Urtizberea_1991 | irrelevant | 2 | 0 | The study focuses on the pharmacodynamic relationship between digitoxin concentration and RBC potassium depletion using an effect compartment model, rather than reporting quantitative disposition parameters (CL, V, ka) for digitoxin. |
| PGx | Yakisich_2017 | not_relevant | 0 | 0 | The paper investigates chemoresistance mechanisms in cancer cells under serum starvation and does not report any pharmacogenomic effects (gene variants) on the PK or PD of digitoxin. |
| PGx | Zeitlin_2017 | not_relevant | 0 | 0 | The study evaluates the safety and pharmacokinetics of digitoxin in cystic fibrosis patients but does not report any pharmacogenomic analysis or genotype-stratified effects on PK/PD parameters. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-06 02:02 UTC</sub>
