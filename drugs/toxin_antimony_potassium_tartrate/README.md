<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Toxins&quot;,&quot;href&quot;:&quot;toxins/README.md&quot;},{&quot;label&quot;:&quot;Food toxins&quot;,&quot;href&quot;:&quot;toxins/FOOD.md&quot;},{&quot;label&quot;:&quot;Antimony potassium tartrate&quot;}]"></div>

# Antimony potassium tartrate

- **generic name:** Antimony potassium tartrate
- **T3DB:** [T3D0873](http://www.t3db.ca/toxins/T3D0873) · **PubChem:** [CID 16682940](https://pubchem.ncbi.nlm.nih.gov/compound/16682940)
- **groups:** experimental

## About

Antimony potassium tartrate is a chemical compound of antimony. Antimony is a metallic element with the chemical symbol Sb and atomic number 51. Small amounts of antimony are found in the earth's crust..

- **Category:** Pollutant, Airborne Pollutant, Food Toxin, Synthetic Toxin
- **Route of exposure:** inhalation, oral, dermal
- **Sources and uses:** Breathing air, drinking water, and eating foods that contain antimony. Exposure can also occur through dermal or skin contact.
- **Mechanism of toxicity:** The inhalation data suggest that the myocardium is a target of antimony toxicity. It is possible that antimony affects circulating glucose by interfering with enzymes of the glycogenolysis and gluconeogenesis pathways. …
- **Health effects:** Dermal exposure to antimony can cause antimony spots (papules and pustules around sweat and sebaceous glands). Antimony poisoning can also lead to pneumoconiosis. …
- **Carcinogenicity:** No indication of carcinogenicity (not listed by IARC).
- **Acute toxicity:** LD50: 115 mg/kg (Oral, Rat) 
LD50: 600 mg/kg (Oral, Mouse)
- **Treatment:** Following oral exposure to antimony, administer charcoal as a slurry (240 mL water/30 g charcoal). …
- **Detected in:** blood, cerebrospinal fluid, saliva, urine

<p><small>Toxicology facts: <a href="http://www.t3db.ca/toxins/T3D0873">T3DB T3D0873</a> (free for non-commercial use with attribution), quoted in part; reference markers removed; the description above is T3DB's too.</small></p>

<p><small>Also: CAS 28300-74-5 · <a href="https://www.ebi.ac.uk/chebi/searchId.do?chebiId=CHEBI:2761">ChEBI 2761</a></small></p>

## Molecular properties

> Molar masses support mass–molar conversion and metabolite stoichiometry. Sources: DrugBank (parent), reported values or identity-matched PubChem entries (metabolites).

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| Antimony potassium tartrate | parent | 667.869 | C8H10K2O15Sb2 | PubChem | [73415808](https://pubchem.ncbi.nlm.nih.gov/compound/73415808) | Coelho_2025 |
| Antimony | metabolite | 121.76 | Sb | PubChem | [5354495](https://pubchem.ncbi.nlm.nih.gov/compound/5354495) | Coelho_2025 |
| antimony_potassium_tartrate | metabolite | 667.869 | C8H10K2O15Sb2 | PubChem | [16682940](https://pubchem.ncbi.nlm.nih.gov/compound/16682940) | Chulay_1988 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-rf" hidden data-species="human" data-age="adult" data-status="Needs review" data-sim="no"></span><span class="pk-badge pk-badge--orange">Needs review</span><br><sub>blocking: disposition incomplete — retention function missing A1, A2 — TK_Retention canno…</sub> | [Chulay_1988_reference](drugs/toxin_antimony_potassium_tartrate/AntimonyPotassiumTartrate_Chulay1988_reference.md) | held back | retention, 2 pools | 3 | Chulay JD et al., Pharmacokinetics of antimony during tre…, Transactions of the Royal S… (1988) | — |
| <span class="pk-rf" hidden data-species="mouse" data-age="adult" data-status="Needs review" data-sim="no"></span><span class="pk-badge pk-badge--orange">Needs review</span> <span class="pk-badge pk-badge--species" title="Animal study (mouse), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">mouse</span><br><sub>blocking: model_quarantined: Vd, ka, Tlag left at base-class defaults</sub> | [Coelho_2025_reference](drugs/toxin_antimony_potassium_tartrate/AntimonyPotassiumTartrate_Coelho2025_reference.md) | held back | 1-compartment, oral | 3 | Coelho L et al., Liposomal Encapsulation of Tartar Emeti…, Pharmaceutics (2025) | [10.3390/pharmaceutics17091109](https://doi.org/10.3390/pharmaceutics17091109) |
| <span class="pk-rf" hidden data-species="mouse" data-age="adult" data-status="Rejected" data-sim="no"></span><span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--species" title="Animal study (mouse), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">mouse</span><br><sub>blocking: C5 dimension mismatch on a structural parameter — unit dimension conflicts with…</sub> | [↳ free_te](drugs/toxin_antimony_potassium_tartrate/AntimonyPotassiumTartrate_Coelho2025_free_te.md) | — | 1-compartment (no model) | 7 |  |  |
| <span class="pk-rf" hidden data-species="mouse" data-age="adult" data-status="Rejected" data-sim="no"></span><span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--species" title="Animal study (mouse), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">mouse</span><br><sub>blocking: C5 dimension mismatch on a structural parameter — unit dimension conflicts with…</sub> | [↳ lip_te](drugs/toxin_antimony_potassium_tartrate/AntimonyPotassiumTartrate_Coelho2025_lip_te.md) | — | 1-compartment (no model) | 7 |  |  |

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model is built and runs, and no check contradicts it, but no value the paper reported was compared with its simulation (none reported, or none extracted). Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-11-17 14:29 | 11:56 | 2/2/0 | 0/0/0 | 0/0/0 | 169,847/9,902 | einfracz / qwen3.8-flash-next | 11 | 2/8 | 11/0 | 0 |

## Coverage

- **PubMed hits:** 42 matched, 41 returned
- **screened:** 2  ·  **relevant:** 2
- **records:** 4  ·  extracted 0  ·  needs review 2  ·  rejected 2  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_1 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Chulay_1988.pdf` | Chulay JD et al., Pharmacokinetics of antimony during tre…, Transactions of the Royal S… (1988) | popPK | 8 |  | [2845611](https://pubmed.ncbi.nlm.nih.gov/2845611) | The paper reports quantitative pharmacokinetic parameters (half-lives) for antimony disposition in humans, but the subjects were treated with sodium stibogluconate and meglumine antimoniate, not antimony potassium tartrate. |

<sub>queue written 2026-11-17 14:27 UTC</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Alamri_2026 | irrelevant | 2 | 1 | The paper studies Sodium Stibogluconate, a chemically distinct pentavalent antimony compound, not antimony potassium tartrate. |
| popPK | Collins_1993 | irrelevant | 2 | 6 | The paper studies sodium stibogluconate, a different antimony compound, not antimony potassium tartrate, so the parameters do not apply to the subject substance. |
| popPK | Datta_2021 | irrelevant | 0 | 0 | The paper is a systematic review on leishmaniasis treatments (Sodium Stibogluconate, Miltefosine, etc.) and does not contain data for antimony potassium tartrate. |
| popPK | Daulatabad_2015 | irrelevant | 0 | 0 | The paper is a clinical case report on leishmaniasis and leprosy with no toxicokinetic parameters for antimony_potassium_tartrate. |
| popPK | Dieter_1991 | irrelevant | 3 | 1 | The study reports tissue concentrations and toxicity endpoints but does not report quantitative toxicokinetic parameters such as half-lives, clearance, volume of distribution, or rate constants. |
| popPK | Dubey_2001 | irrelevant | 0 | 0 | The paper describes anesthetic management in a patient with visceral leishmaniasis and mentions sodium stibogluconate as a medication, but reports no toxicokinetic parameters for antimony potassium tartrate. |
| popPK | Ghosh_2021 | irrelevant | 0 | 0 | The paper is an efficacy and resistance study (EC50, membrane impedance) using SSG only as a classification marker for Leishmania isolates, not reporting toxicokinetic parameters for antimony_potassium_tartrate. |
| popPK | Hepburn_1994 | irrelevant | 0 | 0 | The paper studies sodium stibogluconate, not antimony potassium tartrate, and reports liver enzyme levels and functional tests rather than toxicokinetic parameters like half-lives or clearance rates. |
| popPK | Janssen_2008 | irrelevant | 0 | 0 | The paper is about surfactant proteins and macrophage phagocytosis, mentioning sodium stibogluconate only as an SHP-1 inhibitor, with no toxicokinetic parameters for antimony_potassium_tartrate. |
| popPK | Jaser_1995 | irrelevant | 2 | 0 | The paper studies sodium stibogluconate, not antimony_potassium_tartrate, so the kinetic parameters belong to a different substance. |
| popPK | Lopes_2018 | relevant | 8 | 2 | The paper reports tissue concentrations of Antimony (from Tartar Emetic) in mice liver and spleen, representing distribution/body burden, but the specific numerical values are located in Figure 4 which is not included in the text evidence. |
| popPK | Mehrotra_1995 | irrelevant | 0 | 0 | The paper reports a clinical case and treatment efficacy for visceral leishmaniasis using sodium stibogluconate and pentamidine, with no toxicokinetic parameters for antimony_potassium_tartrate reported. |
| popPK | Miret_2021 | irrelevant | 1 | 0 | The paper focuses on efficacy and toxicity of sodium stibogluconate (SSG), not antimony_potassium_tartrate; SSG-NIV data are referenced but not provided in evidence. |
| popPK | Mueller_2007 | irrelevant | 0 | 0 | The paper is a clinical outcome study reporting efficacy and patient response, containing no quantitative toxicokinetic parameters for antimony_potassium_tartrate (only dose regimen). |
| popPK | Mukherjee_2014 | irrelevant | 1 | 0 | The paper focuses on the molecular mechanism of imipramine in treating antimony-resistant Leishmaniasis using sodium stibogluconate, with no kinetic parameters reported for antimony_potassium_tartrate. |
| popPK | Musa_2012 | irrelevant | 0 | 0 | The paper reports clinical efficacy and safety outcomes (cure rates, adverse events) for sodium stibogluconate (SSG), not antimony potassium tartrate, and contains no toxicokinetic parameters such as half-lives, clearance, or partition coefficients. |
| popPK | Nieto_2003 | irrelevant | 2 | 8 | The paper reports pharmacokinetic parameters for sodium stibogluconate (SSG), not antimony potassium tartrate. |
| popPK | Noguera-Morel_2016 | irrelevant | 0 | 0 | The paper is a clinical case report on cutaneous leishmaniasis using meglumine antimoniate, not a study reporting quantitative toxicokinetic parameters for antimony_potassium_tartrate. |
| popPK | Oghumu_2014 | irrelevant | 0 | 0 | The paper reports immunological and efficacy outcomes of antimonial therapy but contains no toxicokinetic parameters. |
| popPK | Purohit_2017 | irrelevant | 0 | 0 | The paper reports pharmacokinetics for a novel synthetic compound (14t), not antimony_potassium_tartrate, which appears only as a comparator standard drug. |
| popPK | Radwan_2007 | irrelevant | 1 | 0 | The paper studies sodium stibogluconate (Pentostam), which is a different antimonial drug than antimony potassium tartrate, so the kinetic parameters do not belong to the target substance. |
| popPK | Rahimi_2026 | irrelevant | 2 | 2 | The pharmacokinetic data (AUC, clearance) reported in the text belong to miltefosine, not antimony_potassium_tartrate (sodium stibogluconate was given but PK details were deferred to other papers or not extracted here). |
| popPK | Rees_1980 | irrelevant | 0 | 0 | The paper studies sodium stibogluconate, which is a different substance than antimony potassium tartrate. |
| popPK | Reymond_1998 | irrelevant | 0 | 0 | The paper reports kinetics for sodium stibogluconate, not antimony potassium tartrate. |
| popPK | Saffarian_2024 | irrelevant | 0 | 0 | The paper is a clinical case series reporting therapeutic outcomes and side effects for meglumine antimoniate and other agents, with no antimony potassium tartrate reported and no quantitative toxicokinetic parameters. |
| popPK | Sharquie_1998 | irrelevant | 0 | 0 | The paper discusses electrotherapy and sodium stibogluconate for leishmaniasis, with no mention of antimony_potassium_tartrate or any toxicokinetic parameters. |
| popPK | Smith_1986 | irrelevant | 0 | 0 | no_text gate: only 176 chars of text extracted (&lt; 400) |
| popPK | Suryawanshi_2013 | irrelevant | 0 | 0 | The paper focuses on aryl S,N-ketene acetals as antileishmanial agents, using sodium stibogluconate only as a comparator reference drug without reporting kinetic parameters for antimony_potassium_tartrate. |
| popPK | Thakur_1993 | irrelevant | 0 | 0 | The paper is a clinical trial of amphotericin B for kala-azar, with no mention of antimony_potassium_tartrate or any toxicokinetic parameters. |
| popPK | Thakur_2020 | irrelevant | 0 | 0 | The paper reports clinical cure rates for antimony-resistant kala-azar patients treated with Fungizone (an antifungal, not antimony_potassium_tartrate) but contains no quantitative toxicokinetic parameters for antimony_potassium_tartrate. |
| popPK | Veiga_1990 | irrelevant | 0 | 0 | The paper studies the nephrotoxicity of Pentostam (sodium stibogluconate) and Glucantime (meglumine antimoniate), not antimony_potassium_tartrate, and reports no kinetic parameters for any substance. |
| popPK | Verrest_2021 | irrelevant | 0 | 0 | The paper reports pharmacokinetic parameters for paromomycin, not antimony potassium tartrate; sodium stibogluconate (an antimonial) is mentioned only as a comparator/co-medication without its own kinetic parameters being modeled in this text. |
| popPK | Zaghloul_2004 | irrelevant | 2 | 0 | The paper reports pharmacokinetic parameters for sodium stibogluconate, not antimony_potassium_tartrate. |
| popPK | Zaghloul_2010 | irrelevant | 0 | 0 | The study investigates sodium stibogluconate, not antimony potassium tartrate, making the kinetic parameters inapplicable to the target substance. |
| popPK | Zijlstra_1993 | irrelevant | 0 | 0 | The paper reports on the efficacy and clinical outcomes of sodium stibogluconate treatment for kala-azar, without reporting any quantitative toxicokinetic parameters for antimony_potassium_tartrate or even for sodium stibogluconate itself. |
| popPK | al_1995 | irrelevant | 2 | 9 | The paper reports pharmacokinetic parameters for sodium stibogluconate, which is a different chemical entity from antimony potassium tartrate. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this page](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bantimony_potassium_tartrate%5D&body=Drug%3A%20antimony_potassium_tartrate%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/toxin_antimony_potassium_tartrate/%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · newest extraction 2026-11-17 14:27 UTC</sub>
