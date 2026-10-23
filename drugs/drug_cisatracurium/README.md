<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;M03A&quot;,&quot;href&quot;:&quot;atc/M03A.md&quot;},{&quot;label&quot;:&quot;cisatracurium&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Cisatracurium_Liu2012_reference&quot;,&quot;label&quot;:&quot;Liu_2012_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_cisatracurium/Cisatracurium_Liu2012_reference.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Cisatracurium_Tran1998_reference&quot;,&quot;label&quot;:&quot;Tran_1998_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_cisatracurium/Cisatracurium_Tran1998_reference.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

# cisatracurium

- **generic name:** cisatracurium
- **ATC codes:** `M03AC11`
- **DrugBank:** [DB00565](https://go.drugbank.com/drugs/DB00565) · **PubChem:** [CID 62886](https://pubchem.ncbi.nlm.nih.gov/compound/62886)
- **molar mass:** 929.16 g/mol (C53H72N2O12) — DrugBank
- **groups:** approved, investigational

## About

Cisatracurium is a peripherally acting muscle relaxant, related to atracurium, used to relax muscles during surgical procedures and mechanical ventilation. It is an approved medicine in widespread clinical use, mainly in anaesthesia and intensive care settings.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q81978749](https://www.wikidata.org/wiki/Q81978749) and the WHO ATC classification; not checked by a person.</small>

## Molecular properties

> Molar masses support mass–molar conversion and metabolite stoichiometry. Sources: DrugBank (parent), reported values or identity-matched PubChem entries (metabolites).

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| cisatracurium | parent | 929.16 | C53H72N2O12 | DrugBank | [62886](https://pubchem.ncbi.nlm.nih.gov/compound/62886) | Boyd_1996, Dahaba_2013, Huang_2020, Liu_2012, Panusitthikorn_2022, Sorooshian_1996, Tran_1998 |

## Start here

> **Liu_2012_reference** — <span class="pk-badge pk-badge--green">Reproduces paper</span> critically ill patients with severe sepsis. [Run it in the simulator](drugs/drug_cisatracurium/Cisatracurium_Liu2012_reference.md?tab=Simulation) · [record](drugs/drug_cisatracurium/Cisatracurium_Liu2012_reference.md)

<sub>Chosen automatically: the best-status record that runs in the browser, preferring a healthy, human population and values taken from the paper.</sub>

## Parameters across studies

| parameter | as named | value | unit | as reported | population | n | species | status | record |
|---|---|---|---|---|---|---|---|---|---|
| CL | CL | 3.7 | L/h | 3.7 L/h | patients under propofol anesthesia | &gt;$0 | human | <span class="pk-badge pk-badge--green">Reproduces paper</span> | [Tran_1998_reference](drugs/drug_cisatracurium/Cisatracurium_Tran1998_reference.md) |
| CL | CL | 5.2 | L/h | 5.2 L/h | critically ill patients with severe sepsis |  | human | <span class="pk-badge pk-badge--green">Reproduces paper</span> | [Liu_2012_reference](drugs/drug_cisatracurium/Cisatracurium_Liu2012_reference.md) |
| V | V | 6.356 ‡ | L | 90.8 mL kg-1 | patients undergoing acute normovolemic hemodilution or control | 40 | human | <span class="pk-badge pk-badge--orange">Needs review</span> | [Dahaba_2013_reference](drugs/drug_cisatracurium/Cisatracurium_Dahaba2013_reference.md) |
| t½ | t1/2z | 0.3983 | h | 23.9 min | patients under propofol anesthesia | &gt;$0 | human | <span class="pk-badge pk-badge--green">Reproduces paper</span> | [Tran_1998_reference](drugs/drug_cisatracurium/Cisatracurium_Tran1998_reference.md) |

<sub>Values are converted from the record's SI value to one unit per parameter. ‡ given per kg in the paper; shown for a 70 kg adult. Rejected records are left out.</sub>

<div class="pk-forest-row"><svg class="pk-forest" xmlns="http://www.w3.org/2000/svg" width="560" height="80" viewBox="0 0 560 80" role="img" aria-label="CL across studies"><text x="190" y="14" font-size="12" font-weight="600">CL (L/h, log scale)</text><line x1="190.0" y1="18" x2="190.0" y2="58" stroke="#ddd"/><text x="190.0" y="72" font-size="10" text-anchor="middle">1</text><line x1="540.0" y1="18" x2="540.0" y2="58" stroke="#ddd"/><text x="540.0" y="72" font-size="10" text-anchor="middle">10</text><text x="184" y="34.0" font-size="11" text-anchor="end">Tran_1998 · CL</text><circle cx="388.9" cy="30.0" r="4" fill="#2e7d32"><title>Tran_1998 · CL: 3.7 L/h</title></circle><text x="184" y="50.0" font-size="11" text-anchor="end">Liu_2012 · CL</text><circle cx="440.6" cy="46.0" r="4" fill="#2e7d32"><title>Liu_2012 · CL: 5.2 L/h</title></circle></svg></div>

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-rf" hidden data-species="human" data-age="adult" data-status="Reproduces paper" data-sim="yes"></span><span class="pk-badge pk-badge--green">Reproduces paper</span> | [Liu_2012_reference](drugs/drug_cisatracurium/Cisatracurium_Liu2012_reference.md) | ▶ model + simulator | 1-compartment, IV | 2 | Liu X et al., The pharmacokinetics and pharmacodynami…, British journal of clinical… (2012) | [10.1111/j.1365-2125.2011.04149.x](https://doi.org/10.1111/j.1365-2125.2011.04149.x) |
| <span class="pk-rf" hidden data-species="human" data-age="adult" data-status="Reproduces paper" data-sim="yes"></span><span class="pk-badge pk-badge--green">Reproduces paper</span> | [Tran_1998_reference](drugs/drug_cisatracurium/Cisatracurium_Tran1998_reference.md) | ▶ model + simulator | 1-compartment, IV | 3 | Tran TV et al., Pharmacokinetics and pharmacodynamics o…, Anesthesia and analgesia (1998) | [10.1097/00000539-199811000-00034](https://doi.org/10.1097/00000539-199811000-00034) |
| <span class="pk-rf" hidden data-species="human" data-age="adult" data-status="Needs review" data-sim="no"></span><span class="pk-badge pk-badge--orange">Needs review</span><br><sub>blocking: disposition incomplete — only volume extracted — the engineer needs clearance/e…</sub> | [Dahaba_2013_reference](drugs/drug_cisatracurium/Cisatracurium_Dahaba2013_reference.md) | — | 1-compartment (no model) | 4 | Dahaba AA et al., Influence of acute normovolemic hemodil…, Minerva anestesiologica (2013) | — |
| <span class="pk-rf" hidden data-species="human" data-age="adult" data-status="Rejected" data-sim="no"></span><span class="pk-badge pk-badge--red">Rejected</span><br><sub>blocking: C8 unreachable/orphan compartment or unlinked metabolite</sub> | [Boyd_1996_reference](drugs/drug_cisatracurium/Cisatracurium_Boyd1996_reference.md) | — | general linear (no model) | 2 | Boyd AH et al., Comparison of the pharmacodynamics and…, British journal of anaesthe… (1996) | [10.1093/bja/76.3.382](https://doi.org/10.1093/bja/76.3.382) |
| <span class="pk-rf" hidden data-species="dog" data-age="unknown" data-status="Rejected" data-sim="no"></span><span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--species" title="Animal study (dog), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">dog</span><br><sub>blocking: missing key parameters — none reported by this paper</sub> | [Chen_2009_reference](drugs/drug_cisatracurium/Cisatracurium_Chen2009_reference.md) | — | 1-compartment (no model) | 0 | Chen C et al., Studies on the pharmacokinetics of cisa…, Journal of veterinary pharm… (2009) | [10.1111/j.1365-2885.2009.01078.x](https://doi.org/10.1111/j.1365-2885.2009.01078.x) |
| <span class="pk-rf" hidden data-species="human" data-age="adult" data-status="Rejected" data-sim="no"></span><span class="pk-badge pk-badge--red">Rejected</span><br><sub>blocking: C8 unreachable/orphan compartment or unlinked metabolite</sub> | [Huang_2020_ar](drugs/drug_cisatracurium/Cisatracurium_Huang2020_ar.md) | — | 2-compartment (no model) | 6 | Huang X et al., Abnormal cisatracurium pharmacodynamics…, BMC anesthesiology (2020) | [10.1186/s12871-020-0935-z](https://doi.org/10.1186/s12871-020-0935-z) |
| <span class="pk-rf" hidden data-species="human" data-age="adult" data-status="Rejected" data-sim="no"></span><span class="pk-badge pk-badge--red">Rejected</span><br><sub>blocking: C8 unreachable/orphan compartment or unlinked metabolite</sub> | [↳ control](drugs/drug_cisatracurium/Cisatracurium_Huang2020_control.md) | — | 2-compartment (no model) | 10 |  |  |
| <span class="pk-rf" hidden data-species="human" data-age="adult" data-status="Rejected" data-sim="no"></span><span class="pk-badge pk-badge--red">Rejected</span><br><sub>blocking: missing key parameters — none reported by this paper</sub> | [Panusitthikorn_2022_reference](drugs/drug_cisatracurium/Cisatracurium_Panusitthikorn2022_reference.md) | — | 1-compartment (no model) | 0 | Panusitthikorn P et al., Pharmacokinetics and pharmacodynamics s…, BMC anesthesiology (2022) | [10.1186/s12871-022-01571-2](https://doi.org/10.1186/s12871-022-01571-2) |
| <span class="pk-rf" hidden data-species="human" data-age="adult" data-status="Rejected" data-sim="no"></span><span class="pk-badge pk-badge--red">Rejected</span><br><sub>blocking: missing key parameters — none reported by this paper</sub> | [Smith_1997_reference](drugs/drug_cisatracurium/Cisatracurium_Smith1997_reference.md) | — | general linear (no model) | 0 | Smith CE et al., A comparison of the infusion pharmacoki…, Anaesthesia (1997) | [10.1111/j.1365-2044.1997.195-az0331.x](https://doi.org/10.1111/j.1365-2044.1997.195-az0331.x) |
| <span class="pk-rf" hidden data-species="human" data-age="mixed" data-status="Rejected" data-sim="no"></span><span class="pk-badge pk-badge--red">Rejected</span><br><sub>blocking: C5 dimension mismatch on a structural parameter</sub> | [Sorooshian_1996_reference](drugs/drug_cisatracurium/Cisatracurium_Sorooshian1996_reference.md) | — | 1-compartment (no model) | 2 | Sorooshian SS et al., Pharmacokinetics and pharmacodynamics o…, Anesthesiology (1996) | [10.1097/00000542-199605000-00010](https://doi.org/10.1097/00000542-199605000-00010) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--neutral">Not simulated</span> | [Bergeron_2001_mechanical_response_of_the_adductor_pollicis_muscle](drugs/drug_cisatracurium/pd_Bergeron_2001_mechanical_response_of_the_adductor_pollicis_m.md) | mechanical response of the adductor pollicis muscle ← cisatracurium · delayed effect through an effect compartment | — | Bergeron L et al., Concentration-effect relationship of ci…, Anesthesiology (2001) | [10.1097/00000542-200108000-00010](https://doi.org/10.1097/00000542-200108000-00010) |
| <span class="pk-badge pk-badge--neutral">Not simulated</span> | [Breslin_2004_clinical_duration](drugs/drug_cisatracurium/pd_Breslin_2004_clinical_duration.md) | clinical duration of the first 2 maintenance doses of cisatracurium ← cisatracurium · model not identified | — | Breslin DS et al., Pharmacodynamic interactions between ci…, Anesthesia and analgesia (2004) | [10.1213/01.ANE.0000093387.15263.48](https://doi.org/10.1213/01.ANE.0000093387.15263.48) |
| <span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--species" title="Animal study (dog), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">dog</span> | [Chen_2008_TOF](drugs/drug_cisatracurium/pd_Chen_2008_TOF.md) | neuromuscular function ← cisatracurium · direct sigmoid Emax (Hill) effect | — | Chen C et al., Dose-dependency of pharmacokinetic/phar…, British journal of anaesthe… (2008) | [10.1093/bja/aen308](https://doi.org/10.1093/bja/aen308) |
| <span class="pk-badge pk-badge--neutral">Not simulated</span> | [De_1996_NMB](drugs/drug_cisatracurium/pd_De_1996_NMB.md) | neuromuscular block ← cisatracurium · delayed effect through an effect compartment | — | De Wolf AM et al., Pharmacokinetics and pharmacodynamics o…, British journal of anaesthe… (1996) | [10.1093/bja/76.5.624](https://doi.org/10.1093/bja/76.5.624) |
| <span class="pk-badge pk-badge--neutral">Not simulated</span> | [Imbeault_2006_twitch_height](drugs/drug_cisatracurium/pd_Imbeault_2006_twitch_height.md) | twitch height ← cisatracurium · delayed effect through an effect compartment | — | Imbeault K et al., Pharmacokinetics and pharmacodynamics o…, Anesthesia and analgesia (2006) | [10.1213/01.ane.0000195342.29133.ce](https://doi.org/10.1213/01.ane.0000195342.29133.ce) |
| <span class="pk-badge pk-badge--neutral">Not simulated</span> | [Lepage_1996_inhibition_of_adductor_pollicis_twitch_evoked_at_0_1_Hz](drugs/drug_cisatracurium/pd_Lepage_1996_inhibition_of_adductor_pollicis_twitch_evoked_at.md) | inhibition of adductor pollicis twitch evoked at 0.1 Hz ← cisatracurium · direct Emax (saturable) effect | — | Lepage JY et al., Pharmacodynamic dose-response and safet…, Anesthesia and analgesia (1996) | [10.1097/00000539-199610000-00030](https://doi.org/10.1097/00000539-199610000-00030) |
| <span class="pk-badge pk-badge--neutral">Not simulated</span> | [Liu_2012_neuromuscular_block](drugs/drug_cisatracurium/pd_Liu_2012_neuromuscular_block.md) | neuromuscular block ← cisatracurium · delayed effect through an effect compartment | — | Liu X et al., The pharmacokinetics and pharmacodynami…, British journal of clinical… (2012) | [10.1111/j.1365-2125.2011.04149.x](https://doi.org/10.1111/j.1365-2125.2011.04149.x) |
| <span class="pk-badge pk-badge--neutral">Not simulated</span> | [Liu_2017_TOF](drugs/drug_cisatracurium/pd_Liu_2017_TOF.md) | degree of neuromuscular block ← cisatracurium · delayed effect through an effect compartment | — | Liu J et al., Altered pharmacodynamics and pharmacoki…, British journal of clinical… (2017) | [10.1111/bcp.13121](https://doi.org/10.1111/bcp.13121) |
| <span class="pk-badge pk-badge--neutral">Not simulated</span> | [Wu_2016_neuromuscular_block](drugs/drug_cisatracurium/pd_Wu_2016_neuromuscular_block.md) | neuromuscular block ← cisatracurium · delayed effect through an effect compartment | — | Wu Z et al., Altered Cisatracurium Pharmacokinetics…, Drug metabolism and disposi… (2016) | [10.1124/dmd.115.067405](https://doi.org/10.1124/dmd.115.067405) |

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=cisatracurium).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| metabolism | blood | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |
| excretion | bile duct | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |
| excretion | kidney | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |
| excretion | liver | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |

<sub>Actors without a tissue in the table: CHRM2 (target), CHRNA1 (target), CHRNA10 (target), CHRNA2 (target).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 02:24 | 8:47 | 3/7/0 | 9/0/0 | 0/0/0 | 264,504/22,004 | einfracz / qwen3.8-27b | 9 | 0/3 | 9/0 | 0 |

## Coverage

- **PubMed hits:** 135 matched, 70 returned
- **screened:** 15  ·  **relevant:** 15
- **records:** 10  ·  extracted 2  ·  needs_review 1  ·  rejected 7  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_20 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Boyd_1996.pdf` | Boyd AH et al., Comparison of the pharmacodynamics and…, British journal of anaesthe… (1996) | popPK | 10 | [10.1093/bja/76.3.382](https://doi.org/10.1093/bja/76.3.382) | [8785138](https://pubmed.ncbi.nlm.nih.gov/8785138) | The paper reports specific population pharmacokinetic parameters (V, Cl, T1/2) for cisatracurium fitted using NONMEM. |
| `Chen_2009.pdf` | Chen C et al., Studies on the pharmacokinetics of cisa…, Journal of veterinary pharm… (2009) | popPK | 10 | [10.1111/j.1365-2885.2009.01078.x](https://doi.org/10.1111/j.1365-2885.2009.01078.x) | [20444012](https://pubmed.ncbi.nlm.nih.gov/20444012) | The study reports quantitative pharmacokinetic parameters (clearance, volume, half-life/rates) for cisatracurium in dogs with values explicitly provided in the text. |
| `Dahaba_2013.pdf` | Dahaba AA et al., Influence of acute normovolemic hemodil…, Minerva anestesiologica (2013) | popPK | 10 | not captured | [23698546](https://pubmed.ncbi.nlm.nih.gov/23698546) | The paper reports specific quantitative pharmacokinetic parameters (V1, Vdss, Clc, Cl, t1/2, MRT, keo, gamma) for cisatracurium in humans. |
| `De_1996.pdf` | De Wolf AM et al., Pharmacokinetics and pharmacodynamics o…, British journal of anaesthe… (1996) | popPK | 10 | [10.1093/bja/76.5.624](https://doi.org/10.1093/bja/76.5.624) | [8688259](https://pubmed.ncbi.nlm.nih.gov/8688259) | The study reports quantitative non-compartmental PK parameters (Vss, CL, t1/2) for cisatracurium in humans, with numeric values explicitly stated in the abstract. |
| `Imbeault_2006.pdf` | Imbeault K et al., Pharmacokinetics and pharmacodynamics o…, Anesthesia and analgesia (2006) | popPK | 10 | [10.1213/01.ane.0000195342.29133.ce](https://doi.org/10.1213/01.ane.0000195342.29133.ce) | [16492821](https://pubmed.ncbi.nlm.nih.gov/16492821) | The abstract explicitly reports numeric PK parameters for cisatracurium, including half-lives, volume of distribution, and clearance in children. |
| `Kisor_1996.pdf` | Kisor DF et al., Importance of the organ-independent eli…, Anesthesia and analgesia (1996) | popPK | 10 | [10.1097/00000539-199611000-00029](https://doi.org/10.1097/00000539-199611000-00029) | [8895287](https://pubmed.ncbi.nlm.nih.gov/8895287) | The study reports quantitative pharmacokinetic parameters (clearance, volume, model fits) for cisatracurium in humans with specific numeric values provided in the text. |
| `Liu_2012.pdf` | Liu X et al., The pharmacokinetics and pharmacodynami…, British journal of clinical… (2012) | popPK | 10 | [10.1111/j.1365-2125.2011.04149.x](https://doi.org/10.1111/j.1365-2125.2011.04149.x) | [22114771](https://pubmed.ncbi.nlm.nih.gov/22114771) | The abstract explicitly reports quantitative PK parameters including steady-state volume of distribution (111 ± 71 ml kg(-1)) and plasma clearance (5.2 ± 1.8 ml min(-1) kg(-1)) for cisatracurium in humans. |
| `Liu_2017.pdf` | Liu J et al., Altered pharmacodynamics and pharmacoki…, British journal of clinical… (2017) | popPK | 10 | [10.1111/bcp.13121](https://doi.org/10.1111/bcp.13121) | [27582302](https://pubmed.ncbi.nlm.nih.gov/27582302) | The study reports PK/PD of cisatracurium in humans with a two-compartment model, but the specific numeric parameter values (CL, V, Q, etc.) are not present in the provided text. |
| `Ornstein_1996.pdf` | Ornstein E et al., Pharmacodynamics and pharmacokinetics o…, Anesthesiology (1996) | popPK | 10 | [10.1097/00000542-199603000-00005](https://doi.org/10.1097/00000542-199603000-00005) | [8659778](https://pubmed.ncbi.nlm.nih.gov/8659778) | The abstract explicitly reports quantitative pharmacokinetic parameters (clearance, Vss, and elimination half-life) for cisatracurium in human subjects. |
| `Smith_1997.pdf` | Smith CE et al., A comparison of the infusion pharmacoki…, Anaesthesia (1997) | popPK | 10 | [10.1111/j.1365-2044.1997.195-az0331.x](https://doi.org/10.1111/j.1365-2044.1997.195-az0331.x) | [9349062](https://pubmed.ncbi.nlm.nih.gov/9349062) | The study reports quantitative pharmacokinetic parameters (clearance and elimination half-life) for cisatracurium in healthy patients using a two-compartment model. |
| `Sorooshian_1996.pdf` | Sorooshian SS et al., Pharmacokinetics and pharmacodynamics o…, Anesthesiology (1996) | popPK | 10 | [10.1097/00000542-199605000-00010](https://doi.org/10.1097/00000542-199605000-00010) | [8624002](https://pubmed.ncbi.nlm.nih.gov/8624002) | The study reports specific quantitative pharmacokinetic parameters for cisatracurium (clearance, volume of distribution) in human subjects, with values explicitly provided in the abstract. |
| `Tran_1998.pdf` | Tran TV et al., Pharmacokinetics and pharmacodynamics o…, Anesthesia and analgesia (1998) | popPK | 10 | [10.1097/00000539-199811000-00034](https://doi.org/10.1097/00000539-199811000-00034) | [9806701](https://pubmed.ncbi.nlm.nih.gov/9806701) | The abstract provides explicit numeric values for clearance, volume of distribution, and half-life for cisatracurium in a human population PK/PD study. |
| `Kisor_1999.pdf` | Kisor DF et al., Clinical pharmacokinetics of cisatracur…, Clinical pharmacokinetics (1999) | popPK | 9 | [10.2165/00003088-199936010-00003](https://doi.org/10.2165/00003088-199936010-00003) | [9989341](https://pubmed.ncbi.nlm.nih.gov/9989341) | The paper is a clinical pharmacokinetic review that explicitly reports quantitative values for clearance (0.28 L/h/kg), volume of distribution (0.145 L/kg), and half-life (25 minutes) for cisatracurium in the text. |
| `Schmith_1997_2.pdf` | Schmith VD et al., Dose proportionality of cisatracurium, Journal of clinical pharmac… (1997) | popPK | 9 | [10.1002/j.1552-4604.1997.tb04345.x](https://doi.org/10.1002/j.1552-4604.1997.tb04345.x) | [9243356](https://pubmed.ncbi.nlm.nih.gov/9243356) | The paper describes a population PK model for cisatracurium, but the evidence provided contains no numeric parameter values (CL, V, etc.). |
| `Wu_2016.pdf` | Wu Z et al., Altered Cisatracurium Pharmacokinetics…, Drug metabolism and disposi… (2016) | popPK | 9 | [10.1124/dmd.115.067405](https://doi.org/10.1124/dmd.115.067405) | [26470914](https://pubmed.ncbi.nlm.nih.gov/26470914) | The study is a clinical PK/PD investigation of cisatracurium using a two-compartment model, but the evidence only provides percentage changes and half-lives without specific quantitative clearance (CL), volume (V), or intercompartmental clearance (Q) values in standard units. |
| `Chen_2008.pdf` | Chen C et al., Dose-dependency of pharmacokinetic/phar…, British journal of anaesthe… (2008) | popPK | 8 | [10.1093/bja/aen308](https://doi.org/10.1093/bja/aen308) | [18974056](https://pubmed.ncbi.nlm.nih.gov/18974056) | The study reports PK parameters for cisatracurium in dogs, but the specific quantitative disposition values (CL, V) are not explicitly listed in the text, only specific PK/PD linkage parameters (k_e0, EC50). |
| `Eastwood_1995.pdf` | Eastwood NB et al., Pharmacokinetics of 1R-cis 1'R-cis atra…, British journal of anaesthe… (1995) | popPK | 8 | [10.1093/bja/75.4.431](https://doi.org/10.1093/bja/75.4.431) | [7488483](https://pubmed.ncbi.nlm.nih.gov/7488483) | The study reports quantitative PK parameters (clearance, half-life) for cisatracurium (51W89) in humans, although specific mean values for clearance and volume are not explicitly listed, only relative changes and half-life values are provided in the text. |
| `Reich_2004.pdf` | Reich DL et al., Comparison of cisatracurium and vecuron…, Anesthesiology (2004) | popPK | 8 | [10.1097/00000542-200411000-00011](https://doi.org/10.1097/00000542-200411000-00011) | [15505447](https://pubmed.ncbi.nlm.nih.gov/15505447) | The study describes a one-compartment pharmacokinetic analysis of cisatracurium, but the actual numeric parameter values are not present in the provided evidence. |
| `Schmith_1997.pdf` | Schmith VD et al., Prospective use of population pharmacok…, Pharmaceutical research (1997) | popPK | 8 | [10.1023/a:1012015719694](https://doi.org/10.1023/a:1012015719694) | [9034227](https://pubmed.ncbi.nlm.nih.gov/9034227) | The abstract reports that covariates significantly affected parameters but does not provide the actual numeric values for clearance, volume, or rate constants. |
| `Wright_1998.pdf` | Wright PM et al., Can bioavailability of low-variance dru…, Clinical pharmacology and t… (1998) | popPK | 5 | [10.1016/S0009-9236(98)90039-X](https://doi.org/10.1016/S0009-9236(98)90039-X) | [9585798](https://pubmed.ncbi.nlm.nih.gov/9585798) | This is a simulation study using cisatracurium as a hypothetical low-variance drug to evaluate statistical methods; the actual numeric PK parameters are not reported in the text, only the simulation settings (ka values) are mentioned. |

<sub>queue written 2026-10-07T02:22:10.889641+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Bergeron_2001 | irrelevant | 1 | 0 | The study reports concentration-effect (PD) parameters rather than quantitative PK disposition parameters, and no PK values are present in the evidence. |
| popPK | Chen_2008 | relevant | 8 | 3 | The study reports PK parameters for cisatracurium in dogs, but the specific quantitative disposition values (CL, V) are not explicitly listed in the text, only specific PK/PD linkage parameters (k_e0, EC50). |
| popPK | Dahaba_2022 | irrelevant | 2 | 0 | The study focuses on pharmacodynamic (PD) parameters (concentrations at effect endpoints) and qualitative covariate identification for a PopPK model, but the extracted evidence contains no quantitative PK parameter values (CL, V, half-life) for cisatracurium. |
| popPK | Elkhateb_2025 | irrelevant | 0 | 0 | The study is a retrospective registry analysis of clinical practice patterns regarding the choice of neuromuscular blocking agents, not a pharmacokinetic study, and reports no disposition parameters for cisatracurium. |
| popPK | Fortier_2001 | irrelevant | 0 | 0 | This is an in vitro/ex vivo pharmacodynamic sensitivity study (phrenic nerve-hemidiaphragm) reporting EC50 values, not a pharmacokinetic study with disposition parameters like clearance or volume. |
| popPK | Kirov_2004 | irrelevant | 0 | 0 | The study reports pharmacodynamic parameters (ED50, onset time, Emax) for neuromuscular blockade, not pharmacokinetic parameters such as clearance or volume of distribution. |
| popPK | Kopman_2010 | irrelevant | 0 | 0 | The paper focuses on dose-response analysis (ED50/ED95) of neuromuscular blockade, not pharmacokinetic parameters (CL, V, t1/2) for cisatracurium. |
| popPK | Liu_2017 | relevant | 10 | 1 | The study reports PK/PD of cisatracurium in humans with a two-compartment model, but the specific numeric parameter values (CL, V, Q, etc.) are not present in the provided text. |
| popPK | Milchert_2009 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of smooth muscle tone, not a pharmacokinetic study, and contains no disposition parameters for cisatracurium. |
| popPK | Paul_2002 | irrelevant | 1 | 0 | The study is a pharmacodynamic modeling analysis of previously published data, focusing on effect-site parameters (C50, ke0) rather than reporting original quantitative pharmacokinetic disposition parameters (CL, V, Q) for cisatracurium. |
| popPK | Reich_2004 | relevant | 8 | 1 | The study describes a one-compartment pharmacokinetic analysis of cisatracurium, but the actual numeric parameter values are not present in the provided evidence. |
| popPK | Roy_2004 | irrelevant | 3 | 0 | The study analyzes correlations between physicochemical properties and PK-PD parameters without reporting original quantitative disposition parameter values (CL, V, etc.) for cisatracurium. |
| popPK | Schmith_1997 | irrelevant | 8 | 0 | The abstract reports that covariates significantly affected parameters but does not provide the actual numeric values for clearance, volume, or rate constants. |
| popPK | Schmith_1997_2 | relevant | 9 | 0 | The paper describes a population PK model for cisatracurium, but the evidence provided contains no numeric parameter values (CL, V, etc.). |
| popPK | Thompson_2021 | irrelevant | 0 | 0 | The study is a clinical outcome comparison of dosing strategies (fixed vs. titrated) for cisatracurium in ARDS patients and does not report pharmacokinetic parameters such as clearance, volume, or half-life. |
| popPK | Triem_2006 | irrelevant | 0 | 0 | The study investigates propofol anesthesia regimens, and cisatracurium is only listed as a co-administered agent without any pharmacokinetic parameters reported. |
| PGx | Wei_2021 | not_relevant | 0 | 0 | The paper describes a protocol to investigate genetic variants affecting sevoflurane sensitivity; cisatracurium is only used as part of the anesthetic regimen and is not the subject of pharmacogenomic analysis. |
| popPK | Wright_1998 | irrelevant | 5 | 1 | This is a simulation study using cisatracurium as a hypothetical low-variance drug to evaluate statistical methods; the actual numeric PK parameters are not reported in the text, only the simulation settings (ka values) are mentioned. |
| popPK | Wu_2016 | relevant | 9 | 4 | The study is a clinical PK/PD investigation of cisatracurium using a two-compartment model, but the evidence only provides percentage changes and half-lives without specific quantitative clearance (CL), volume (V), or intercompartmental clearance (Q) values in standard units. |
| popPK | Ye_2009 | irrelevant | 0 | 0 | The study focuses on intrapulmonary shunt and oxygenation mechanics during anesthesia, with cisatracurium used only as an anesthetic adjunct rather than being the subject of pharmacokinetic analysis. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions.</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09) · newest extraction 2026-10-07 02:22 UTC</sub>
