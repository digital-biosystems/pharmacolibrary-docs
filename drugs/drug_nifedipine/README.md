<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;C07F&quot;,&quot;href&quot;:&quot;atc/C07F.md&quot;},{&quot;label&quot;:&quot;nifedipine&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Nifedipine_Fu2022_reference&quot;,&quot;label&quot;:&quot;Fu_2022_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_nifedipine/Nifedipine_Fu2022_reference.md&quot;,&quot;status&quot;:&quot;extracted&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

# nifedipine

- **generic name:** nifedipine
- **ATC codes:** `C07FB03`, `C08CA05`, `C08GA01`
- **DrugBank:** [DB01115](https://go.drugbank.com/drugs/DB01115) · **PubChem:** [CID 4485](https://pubchem.ncbi.nlm.nih.gov/compound/4485)
- **molar mass:** 346.3346 g/mol (C17H18N2O6) — DrugBank
- **groups:** approved, investigational

## About

Nifedipine is a calcium channel blocker used to treat high blood pressure and angina. It is widely used and appears on the WHO list of essential medicines, and is also being investigated for other uses.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q39111](https://www.wikidata.org/wiki/Q39111) and the WHO ATC classification; not checked by a person.</small>

## Molecules and molar masses

> The molar mass each model uses to convert mass to molar concentration and to form a metabolite molecule for molecule. Looked up, never estimated: DrugBank for the drug, the paper's own value or the PubChem entry matched to the paper's name for a metabolite.

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| nifedipine | parent | 346.335 | C17H18N2O6 | DrugBank | [4485](https://pubchem.ncbi.nlm.nih.gov/compound/4485) | Blea_1997, Chung_1987, Fu_2022, Kiriyama_2024, ter_2015 |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 04:03 | 22:03 | 1/4/2 | 1/0/1 | 0/0/0 | 333,263/66,054 | ollama / qwen3.8:27b-mtp-q8_0 | 5 | 2/3 | 4/1 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.667). The first reading is what the record holds.">cross-check: disputed</span> | [Fu_2022_reference](drugs/drug_nifedipine/Nifedipine_Fu2022_reference.md) | ▶ model + simulator | 1-compartment, IV | 3 | Fu C et al., Population Pharmacokinetic Modelling fo…, Drug design, development an… (2022) | [10.2147/DDDT.S362607](https://doi.org/10.2147/DDDT.S362607) |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss:120b (partly confirmed, agreement 0.571). The first reading is what the record holds.">cross-check: partial</span> <span class="pk-badge pk-badge--species" title="Animal study (sheep), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">sheep</span><br><sub>blocking: disposition incomplete — no disposition parameter from this paper; review-gap-f…</sub><br><sub>route_to: `human_review`</sub> | [Blea_1997_reference](drugs/drug_nifedipine/Nifedipine_Blea1997_reference.md) | — | 1-compartment (no model) | 2 | Blea CW et al., Effect of nifedipine on fetal and mater…, American journal of obstetr… (1997) | [10.1016/s0002-9378(97)70622-7](https://doi.org/10.1016/s0002-9378(97)70622-7) |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.7). The first reading is what the record holds.">cross-check: disputed</span><br><sub>blocking: disposition incomplete — volume from this paper; review-gap-filled from other p…</sub><br><sub>route_to: `human_review`</sub> | [ter_2015_reference](drugs/drug_nifedipine/Nifedipine_ter2015_reference.md) | — | 1-compartment (no model) | 3 | ter Laak MA et al., Pharmacokinetics of nifedipine slow-rel…, International journal of cl… (2015) | [10.5414/CP202215](https://doi.org/10.5414/CP202215) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.154). The first reading is what the record holds.">cross-check: disputed</span><br><sub>STALE — current validate: rejected</sub><br><sub>blocking: missing key parameters — none reported by this paper</sub><br><sub>route_to: `human_review`</sub> | [Chung_1987_reference](drugs/drug_nifedipine/Nifedipine_Chung1987_reference.md) | — | 1-compartment (no model) | 0 | Chung M et al., Clinical pharmacokinetics of nifedipine…, The American journal of med… (1987) | [10.1016/0002-9343(87)90630-9](https://doi.org/10.1016/0002-9343(87)90630-9) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.091). The first reading is what the record holds.">cross-check: disputed</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">rat</span><br><sub>blocking: C9 clearance/volume outside physiological window (implausible magnitude — unit/…</sub><br><sub>route_to: `human_review`</sub> | [Kiriyama_2024_reference](drugs/drug_nifedipine/Nifedipine_Kiriyama2024_reference.md) | — | 1-compartment (no model) | 9 | Kiriyama A et al., Exploring the multiple effects of nifed…, Pharmacology research & per… (2024) | [10.1002/prp2.1249](https://doi.org/10.1002/prp2.1249) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss:120b (primary re-run, agreement 0.4). The first reading is what the record holds.">cross-check: partial</span><br><sub>blocking: missing key parameters — none reported by this paper</sub><br><sub>route_to: `human_review`</sub> | [Krecic-Shepard_2000_reference](drugs/drug_nifedipine/Nifedipine_KrecicShepard2000_reference.md) | — | 1-compartment (no model) | 0 | Krecic-Shepard ME et al., Race and sex influence clearance of nif…, Clinical pharmacology and t… (2000) | [10.1067/mcp.2000.108678](https://doi.org/10.1067/mcp.2000.108678) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.5). The first reading is what the record holds.">cross-check: disputed</span><br><sub>STALE — current validate: rejected</sub><br><sub>blocking: missing key parameters — none reported by this paper</sub><br><sub>route_to: `human_review`</sub> | [Li_2025_reference](drugs/drug_nifedipine/Nifedipine_Li2025_reference.md) | — | 1-compartment (no model) | 0 | Li Y et al., Population Pharmacokinetics of Nifedipi…, Journal of clinical pharmac… (2025) | [10.1002/jcph.70087](https://doi.org/10.1002/jcph.70087) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">accepted (caveats)</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">rat</span> | [Kiriyama_2024_BP](drugs/drug_nifedipine/pd_Kiriyama_2024_BP.md) | blood pressure ← nifedipine · indirect response — drug inhibits the production of blood pressure | model (no simulator) | Kiriyama A et al., Exploring the multiple effects of nifed…, Pharmacology research & per… (2024) | [10.1002/prp2.1249](https://doi.org/10.1002/prp2.1249) |
| <span class="pk-badge pk-badge--green">reviewed — candidate</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">rat</span> | [Kiriyama_2024_HR](drugs/drug_nifedipine/pd_Kiriyama_2024_HR.md) | heart rate ← nifedipine · direct sigmoid Emax (Hill) effect | model (no simulator) | Kiriyama A et al., Exploring the multiple effects of nifed…, Pharmacology research & per… (2024) | [10.1002/prp2.1249](https://doi.org/10.1002/prp2.1249) |
| <span class="pk-badge pk-badge--green">reviewed — candidate</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">rat</span> | [Kiriyama_2024_QT](drugs/drug_nifedipine/pd_Kiriyama_2024_QT.md) | QT interval ← nifedipine · direct sigmoid Emax (Hill) effect | model (no simulator) | Kiriyama A et al., Exploring the multiple effects of nifed…, Pharmacology research & per… (2024) | [10.1002/prp2.1249](https://doi.org/10.1002/prp2.1249) |
| <span class="pk-badge pk-badge--orange">needs review</span> | [Liu_2022_SBP](drugs/drug_nifedipine/pd_Liu_2022_SBP.md) | systolic blood pressure ← nifedipine · direct Emax (saturable) effect | model (no simulator) | Liu H et al., Application of physiologically-based ph…, Frontiers in pharmacology (2022) | [10.3389/fphar.2022.970539](https://doi.org/10.3389/fphar.2022.970539) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=nifedipine) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | blood-brain barrier | `ABCB1` inducer/substrate | DrugBank actor |
| absorption | kidney | `ABCB1` inducer/substrate | DrugBank actor |
| absorption | liver | `ABCB1` inducer/substrate | DrugBank actor |
| absorption | placenta | `ABCB1` inducer/substrate | DrugBank actor |
| absorption | small intestine | `ABCB1` inducer/substrate | DrugBank actor |
| absorption | testis | `ABCB1` inducer/substrate | DrugBank actor |
| distribution | blood | `ALB` binder, `ORM1` binder | DrugBank actor |
| metabolism | brain | `CYP2D6` inhibitor | DrugBank actor |
| metabolism | kidney | `CYP3A5` substrate | DrugBank actor |
| metabolism | liver | `CYP1A2` inhibitor/substrate, `CYP2A6` substrate, `CYP2B6` inducer, `CYP2C8` inhibitor, `CYP2C9` inducer/inhibitor, `CYP2D6` inhibitor, `CYP2E1` inhibitor, `CYP3A4` inducer/inhibitor/substrate, `CYP3A5` substrate, `SLCO1B1` inhibitor | DrugBank actor |
| metabolism | lung | `CYP1A1` inhibitor | DrugBank actor |
| metabolism | small intestine | `CYP1A1` inhibitor, `CYP3A4` inducer/inhibitor/substrate, `CYP3A5` substrate | DrugBank actor |
| excretion | bile duct | <sub>named in DrugBank's ADME text</sub> | prose |
| excretion | kidney | `ABCC2` inducer | DrugBank actor |
| excretion | liver | `ABCB11` inhibitor, `ABCC2` inducer, `ABCC3` inducer | DrugBank actor |
| excretion | small intestine | `ABCC2` inducer, `ABCC3` inducer | DrugBank actor |

<sub>Actors without a tissue in the table: CACNA1C (inhibitor), CACNA1D (inhibitor), CACNA1G (inhibitor), CACNA1S (inhibitor), CACNB2 (inhibitor), CALM1 (inhibitor), KCND3 (inhibitor), NR1I2 (target).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 448 matched, 20 returned
- **screened:** 9  ·  **relevant:** 9
- **records:** 7  ·  extracted 1  ·  needs_review 2  ·  rejected 4  ·  stale 2
- **scholar-agent fallback query used:** not captured

## Full text wanted

_7 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Chung_1987.pdf` | Chung M et al., Clinical pharmacokinetics of nifedipine…, The American journal of med… (1987) | popPK | 10 | [10.1016/0002-9343(87)90630-9](https://doi.org/10.1016/0002-9343(87)90630-9) | [3503594](https://pubmed.ncbi.nlm.nih.gov/3503594) | The text explicitly reports quantitative pharmacokinetic parameters for nifedipine, including clearance (450-700 ml/min), volume of distribution (0.62-0.77 L/kg), and half-life (~2 hours). |
| `Krecic-Shepard_2000.pdf` | Krecic-Shepard ME et al., Race and sex influence clearance of nif…, Clinical pharmacology and t… (2000) | popPK | 10 | [10.1067/mcp.2000.108678](https://doi.org/10.1067/mcp.2000.108678) | [10976544](https://pubmed.ncbi.nlm.nih.gov/10976544) | The study reports quantitative population pharmacokinetic parameters (clearance) for nifedipine in humans, with specific numeric values provided in the abstract. |
| `Li_2025.pdf` | Li Y et al., Population Pharmacokinetics of Nifedipi…, Journal of clinical pharmac… (2025) | popPK | 10 | [10.1002/jcph.70087](https://doi.org/10.1002/jcph.70087) | [40857211](https://pubmed.ncbi.nlm.nih.gov/40857211) | The study reports quantitative population PK parameters (CL, V, variability) for nifedipine in humans, with values explicitly stated in the abstract. |
| `ter_2015.pdf` | ter Laak MA et al., Pharmacokinetics of nifedipine slow-rel…, International journal of cl… (2015) | popPK | 10 | [10.5414/CP202215](https://doi.org/10.5414/CP202215) | [25407260](https://pubmed.ncbi.nlm.nih.gov/25407260) | The study reports quantitative pharmacokinetic parameters (half-life and volume of distribution) for nifedipine in pregnant women, with specific numeric values provided in the abstract. |
| `Blea_1997.pdf` | Blea CW et al., Effect of nifedipine on fetal and mater…, American journal of obstetr… (1997) | popPK | 8 | [10.1016/s0002-9378(97)70622-7](https://doi.org/10.1016/s0002-9378(97)70622-7) | [9125622](https://pubmed.ncbi.nlm.nih.gov/9125622) | The study reports quantitative pharmacokinetic parameters for nifedipine in ewes, including metabolic clearance rates (80.0 and 79.8 ml/min/kg) and half-life components (2.87 and 63.57 minutes) derived from a two-compartment model. |
| `Chien_2004.pdf` | Chien SC et al., Pharmacokinetics of nifedipine in Taiwa…, Biopharmaceutics & drug dis… (2004) | popPK | 8 | [10.1002/bdd.386](https://doi.org/10.1002/bdd.386) | [14872555](https://pubmed.ncbi.nlm.nih.gov/14872555) | The study reports quantitative non-compartmental pharmacokinetic parameters (Cmax, AUC, T1/2, Tmax) for nifedipine in humans. |
| `Niu_2021.pdf` | Niu W et al., Investigating the interaction between n…, British journal of clinical… (2021) | popPK | 8 | [10.1111/bcp.14684](https://doi.org/10.1111/bcp.14684) | [33269470](https://pubmed.ncbi.nlm.nih.gov/33269470) | The study develops a PBPK model for nifedipine, but specific quantitative disposition parameters (CL, V, Q) are not explicitly listed in the provided text, only predicted exposure changes (Cmax/AUC folds). |

<sub>queue written 2026-10-07T03:43:10.773822+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Fattinger_1991 | irrelevant | 0 | 0 | The study reports population pharmacokinetic parameters for quinidine, with nifedipine only mentioned as a co-administered drug that did not significantly affect quinidine's kinetics. |
| popPK | Guerciolini_1997 | irrelevant | 0 | 0 | The paper discusses the mechanism of action of orlistat and only mentions that it does not affect the pharmacokinetics of nifedipine, without providing any quantitative PK parameters for nifedipine. |
| popPK | Horgan_1991 | irrelevant | 0 | 0 | The study investigates the mechanism of endothelin-1-induced vasoconstriction in guinea pig lungs, using nifedipine only as a pharmacological tool to block the second phase of the response, rather than measuring nifedipine's pharmacokinetic parameters. |
| popPK | Lemmer_1997 | irrelevant | 1 | 0 | The text is a review discussing general chronopharmacological concepts and mentions nifedipine only as an example of a drug with daily kinetic variations, without providing any specific quantitative PK parameter values. |
| popPK | Mohammed_2020 | irrelevant | 0 | 0 | The study is an in-vitro pharmacological investigation of magnesium sulfate's effects on chicken ductus arteriosus, using nifedipine only as a tool compound (L-type calcium channel blocker) and reporting no pharmacokinetic parameters for nifedipine. |
| popPK | Niu_2021 | relevant | 8 | 2 | The study develops a PBPK model for nifedipine, but specific quantitative disposition parameters (CL, V, Q) are not explicitly listed in the provided text, only predicted exposure changes (Cmax/AUC folds). |
| popPK | Smith_2024 | irrelevant | 0 | 0 | The study is a clinical efficacy trial comparing blood pressure outcomes, not a pharmacokinetic study reporting disposition parameters. |
| popPK | Wasilewicz_2024 | irrelevant | 0 | 0 | The study investigates the postsynaptic effects of a Drosophila neuropeptide, using nifedipine only as a pharmacological tool to block L-type channels, not as the subject of pharmacokinetic analysis. |
| popPK | Yukawa_2001 | irrelevant | 0 | 0 | The study reports population pharmacokinetic parameters for digoxin, not nifedipine (nifedipine is only mentioned as a co-administered drug affecting digoxin clearance). |
| popPK | Zimmerman_2004 | irrelevant | 0 | 0 | The paper focuses on sirolimus pharmacokinetics and drug interactions, with nifedipine mentioned only as a non-interacting co-administered drug. |
| popPK | de_2024 | irrelevant | 0 | 0 | The study investigates the pharmacological mechanism of perillyl alcohol on human umbilical arteries, using nifedipine only as a positive control for L-type calcium channel blockade, and does not report any pharmacokinetic parameters for nifedipine. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-07 03:44 UTC</sub>
