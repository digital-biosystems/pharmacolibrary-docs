<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;C07F&quot;,&quot;href&quot;:&quot;atc/C07F.md&quot;},{&quot;label&quot;:&quot;nifedipine&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Nifedipine_Fu2022_reference&quot;,&quot;label&quot;:&quot;Fu_2022_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_nifedipine/Nifedipine_Fu2022_reference.md&quot;,&quot;status&quot;:&quot;reviewed \u2014 candidate&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

# nifedipine

- **generic name:** nifedipine
- **ATC codes:** `C07FB03`, `C08CA05`, `C08GA01`
- **DrugBank:** [DB01115](https://go.drugbank.com/drugs/DB01115) · **PubChem:** [CID 4485](https://pubchem.ncbi.nlm.nih.gov/compound/4485)
- **molar mass:** 346.3346 g/mol (C17H18N2O6) — DrugBank
- **groups:** approved, investigational

## About

Nifedipine is a calcium channel blocker used to treat high blood pressure and angina. It is widely used and appears on the WHO list of essential medicines, and is also being investigated for other uses.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q39111](https://www.wikidata.org/wiki/Q39111) and the WHO ATC classification; not checked by a person.</small>

## Molecular properties

> Molar masses support mass–molar conversion and metabolite stoichiometry. Sources: DrugBank (parent), reported values or identity-matched PubChem entries (metabolites).

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
| <span class="pk-badge pk-badge--green">reviewed — candidate</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (partly confirmed, agreement 0.909), gpt-oss:120b (not confirmed, agreement 0.667). Primary extraction retained.">cross-check: disputed 0/2</span> | [Fu_2022_reference](drugs/drug_nifedipine/Nifedipine_Fu2022_reference.md) | ▶ model + simulator | 1-compartment, IV | 3 | Fu C et al., Population Pharmacokinetic Modelling fo…, Drug design, development an… (2022) | [10.2147/DDDT.S362607](https://doi.org/10.2147/DDDT.S362607) |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss-120b (partly confirmed, agreement 0.714), gpt-oss:120b (partly confirmed, agreement 0.571). Primary extraction retained.">cross-check: partial 0/2</span> <span class="pk-badge pk-badge--species" title="Animal study (sheep), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">sheep</span><br><sub>blocking: disposition incomplete — no disposition parameter from this paper; review-gap-f…</sub><br><sub>route_to: `human_review`</sub> | [Blea_1997_reference](drugs/drug_nifedipine/Nifedipine_Blea1997_reference.md) | — | 1-compartment (no model) | 2 | Blea CW et al., Effect of nifedipine on fetal and mater…, American journal of obstetr… (1997) | [10.1016/s0002-9378(97)70622-7](https://doi.org/10.1016/s0002-9378(97)70622-7) |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (partly confirmed, agreement 0.75), gpt-oss:120b (not confirmed, agreement 0.7). Primary extraction retained.">cross-check: disputed 0/2</span><br><sub>blocking: disposition incomplete — volume from this paper; review-gap-filled from other p…</sub><br><sub>route_to: `human_review`</sub> | [ter_2015_reference](drugs/drug_nifedipine/Nifedipine_ter2015_reference.md) | — | 1-compartment (no model) | 3 | ter Laak MA et al., Pharmacokinetics of nifedipine slow-rel…, International journal of cl… (2015) | [10.5414/CP202215](https://doi.org/10.5414/CP202215) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (partly confirmed, agreement 0.833), gpt-oss:120b (not confirmed, agreement 0.154). Primary extraction retained.">cross-check: disputed 0/2</span><br><sub>STALE — current validate: rejected</sub><br><sub>blocking: missing key parameters — none reported by this paper</sub><br><sub>route_to: `human_review`</sub> | [Chung_1987_reference](drugs/drug_nifedipine/Nifedipine_Chung1987_reference.md) | — | 1-compartment (no model) | 0 | Chung M et al., Clinical pharmacokinetics of nifedipine…, The American journal of med… (1987) | [10.1016/0002-9343(87)90630-9](https://doi.org/10.1016/0002-9343(87)90630-9) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.857), gpt-oss:120b (not confirmed, agreement 0.091). Primary extraction retained.">cross-check: disputed 0/2</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">rat</span><br><sub>blocking: C9 clearance/volume outside physiological window (implausible magnitude — unit/…</sub><br><sub>route_to: `human_review`</sub> | [Kiriyama_2024_reference](drugs/drug_nifedipine/Nifedipine_Kiriyama2024_reference.md) | — | 1-compartment (no model) | 9 | Kiriyama A et al., Exploring the multiple effects of nifed…, Pharmacology research & per… (2024) | [10.1002/prp2.1249](https://doi.org/10.1002/prp2.1249) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss-120b (primary re-run, agreement 0.8), gpt-oss:120b (primary re-run, agreement 0.4). Primary extraction retained.">cross-check: partial 0/2</span><br><sub>blocking: missing key parameters — none reported by this paper</sub><br><sub>route_to: `human_review`</sub> | [Krecic-Shepard_2000_reference](drugs/drug_nifedipine/Nifedipine_KrecicShepard2000_reference.md) | — | 1-compartment (no model) | 0 | Krecic-Shepard ME et al., Race and sex influence clearance of nif…, Clinical pharmacology and t… (2000) | [10.1067/mcp.2000.108678](https://doi.org/10.1067/mcp.2000.108678) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.5), gpt-oss:120b (not confirmed, agreement 0.5). Primary extraction retained.">cross-check: disputed 0/2</span><br><sub>STALE — current validate: rejected</sub><br><sub>blocking: missing key parameters — none reported by this paper</sub><br><sub>route_to: `human_review`</sub> | [Li_2025_reference](drugs/drug_nifedipine/Nifedipine_Li2025_reference.md) | — | 1-compartment (no model) | 0 | Li Y et al., Population Pharmacokinetics of Nifedipi…, Journal of clinical pharmac… (2025) | [10.1002/jcph.70087](https://doi.org/10.1002/jcph.70087) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">accepted (caveats)</span> <span class="pk-badge pk-badge--red" title="re-read by einfracz:gpt-oss-120b (not confirmed, agreement 0.615). Primary extraction retained.">cross-check: disputed</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">rat</span> | [Kiriyama_2024_BP](drugs/drug_nifedipine/pd_Kiriyama_2024_BP.md) | blood pressure ← nifedipine · indirect response — drug inhibits the production of blood pressure | model (no simulator) | Kiriyama A et al., Exploring the multiple effects of nifed…, Pharmacology research & per… (2024) | [10.1002/prp2.1249](https://doi.org/10.1002/prp2.1249) |
| <span class="pk-badge pk-badge--green">reviewed — candidate</span> <span class="pk-badge pk-badge--green" title="re-read by einfracz:gpt-oss-120b (confirmed, agreement 1.0). Primary extraction retained.">cross-checked ✓</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">rat</span> | [Kiriyama_2024_HR](drugs/drug_nifedipine/pd_Kiriyama_2024_HR.md) | heart rate ← nifedipine · direct sigmoid Emax (Hill) effect | model (no simulator) | Kiriyama A et al., Exploring the multiple effects of nifed…, Pharmacology research & per… (2024) | [10.1002/prp2.1249](https://doi.org/10.1002/prp2.1249) |
| <span class="pk-badge pk-badge--green">reviewed — candidate</span> <span class="pk-badge pk-badge--green" title="re-read by einfracz:gpt-oss-120b (confirmed, agreement 1.0). Primary extraction retained.">cross-checked ✓</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">rat</span> | [Kiriyama_2024_QT](drugs/drug_nifedipine/pd_Kiriyama_2024_QT.md) | QT interval ← nifedipine · direct sigmoid Emax (Hill) effect | model (no simulator) | Kiriyama A et al., Exploring the multiple effects of nifed…, Pharmacology research & per… (2024) | [10.1002/prp2.1249](https://doi.org/10.1002/prp2.1249) |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--green" title="re-read by einfracz:gpt-oss-120b (confirmed, agreement 1.0). Primary extraction retained.">cross-checked ✓</span> | [Liu_2022_SBP](drugs/drug_nifedipine/pd_Liu_2022_SBP.md) | systolic blood pressure ← nifedipine · direct Emax (saturable) effect | model (no simulator) | Liu H et al., Application of physiologically-based ph…, Frontiers in pharmacology (2022) | [10.3389/fphar.2022.970539](https://doi.org/10.3389/fphar.2022.970539) |

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

## Coverage

- **PubMed hits:** 448 matched, 20 returned
- **screened:** 9  ·  **relevant:** 9
- **records:** 7  ·  extracted 1  ·  needs_review 2  ·  rejected 4  ·  stale 2
- **scholar-agent fallback query used:** not captured

## Full-text requests

_7 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

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
