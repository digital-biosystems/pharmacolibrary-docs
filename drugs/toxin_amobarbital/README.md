<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Toxins&quot;,&quot;href&quot;:&quot;toxins/README.md&quot;},{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;toxins/DRUG.md&quot;},{&quot;label&quot;:&quot;Amobarbital&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Amobarbital_Ritschel1978_reference&quot;,&quot;label&quot;:&quot;Ritschel_1978_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_amobarbital/Amobarbital_Ritschel1978_reference.md&quot;,&quot;status&quot;:&quot;Not simulated&quot;,&quot;css&quot;:&quot;pk-badge--neutral&quot;,&quot;here&quot;:false}]"></div>

# Amobarbital

- **generic name:** Amobarbital
- **T3DB:** [T3D4561](http://www.t3db.ca/toxins/T3D4561) · **DrugBank:** [DB01351](https://go.drugbank.com/drugs/DB01351) · **PubChem:** [CID 2164](https://pubchem.ncbi.nlm.nih.gov/compound/2164)
- **groups:** approved, illicit, investigational

## About

A barbiturate with hypnotic and sedative properties (but not antianxiety). Adverse effects are mainly a consequence of dose-related CNS depression and the risk of dependence with continued use is high. (From Martindale, The Extra Pharmacopoeia, 30th ed, p565)

- **Category:** Drug, Synthetic Toxin
- **Mechanism of toxicity:** Amobarbital (like all barbiturates) works by binding to the GABAA receptor at either the alpha or the beta sub unit. These are binding sites that are distinct from GABA itself and also distinct from the benzodiazepine binding site. …

<p><small>Toxicology facts: <a href="http://www.t3db.ca/toxins/T3D4561">T3DB T3D4561</a> (free for non-commercial use with attribution), quoted in part; reference markers removed; the description above is T3DB's too.</small></p>

<p><small>Also: CAS 57-43-2 · <a href="https://www.ebi.ac.uk/chebi/searchId.do?chebiId=CHEBI:2673">ChEBI 2673</a></small></p>

## Molecular properties

> Molar masses support mass–molar conversion and metabolite stoichiometry. Sources: DrugBank (parent), reported values or identity-matched PubChem entries (metabolites).

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| amobarbital (amylobarbitone) | parent | 226.276 | C11H18N2O3 | PubChem | [2164](https://pubchem.ncbi.nlm.nih.gov/compound/2164) | Bachmann_1987, De_1981, Endrenyi_1976, Redmond_1978, Ritschel_1978 |
| Hydroxyamylobarbitone (ethyl (3 hydroxyisoamyl) barbituric acid) | metabolite | — (mass units only) | — | — | — | — |

## Start here

> **Ritschel_1978_reference** — <span class="pk-badge pk-badge--neutral">Not simulated</span> young adults (ages 20-40) and elderly subjects (over 65). [Run it in the simulator](drugs/toxin_amobarbital/Amobarbital_Ritschel1978_reference.md?tab=Simulation) · [record](drugs/toxin_amobarbital/Amobarbital_Ritschel1978_reference.md)

<sub>Chosen automatically: the best-status record that runs in the browser, preferring a healthy, human population and values taken from the paper.</sub>

## Parameters across studies

<div class="pk-forest-row"><svg class="pk-forest" xmlns="http://www.w3.org/2000/svg" width="560" height="80" viewBox="0 0 560 80" role="img" aria-label="CL across studies"><text x="190" y="14" font-size="12" font-weight="600">CL (L/h, log scale)</text><line x1="190.0" y1="18" x2="190.0" y2="58" stroke="#ddd"/><text x="190.0" y="72" font-size="10" text-anchor="middle">1</text><line x1="540.0" y1="18" x2="540.0" y2="58" stroke="#ddd"/><text x="540.0" y="72" font-size="10" text-anchor="middle">10</text><text x="184" y="34.0" font-size="11" text-anchor="end">Endrenyi_1976 · CL</text><circle cx="314.1" cy="30.0" r="4" fill="#ef6c00"><title>Endrenyi_1976 · CL: 2.262 L/h</title></circle><text x="184" y="50.0" font-size="11" text-anchor="end">Redmond_1978 · CL ·/kg</text><circle cx="413.6" cy="46.0" r="4" fill="#ef6c00"><title>Redmond_1978 · CL ·/kg: 4.354 L/h</title></circle></svg></div>

<sub>One dot per record, coloured by status; values converted from the record's SI value to one unit per parameter. ·/kg: given per kg in the paper, shown for a 70 kg adult. Rejected records are left out.</sub>

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-rf" hidden data-species="human" data-age="mixed" data-status="Not simulated" data-sim="yes"></span><span class="pk-badge pk-badge--neutral">Not simulated</span> | [Ritschel_1978_reference](drugs/toxin_amobarbital/Amobarbital_Ritschel1978_reference.md) | ▶ model + simulator | retention, 1 pool | 1 | Ritschel WA, Age-dependent disposition of amobarbita…, Journal of the American Ger… (1978) | [10.1111/j.1532-5415.1978.tb05036.x](https://doi.org/10.1111/j.1532-5415.1978.tb05036.x) |
| <span class="pk-rf" hidden data-species="human" data-age="adult" data-status="Needs review" data-sim="no"></span><span class="pk-badge pk-badge--orange">Needs review</span><br><sub>blocking: disposition incomplete — only clearance/elimination extracted — the engineer ne…</sub><br><sub>blocking: C5 dimensioned parameter(s) without a unit: Q22, Q3 — no SI value to build from</sub> | [De_1981_reference](drugs/toxin_amobarbital/Amobarbital_De1981_reference.md) | held back | 1-compartment, IV | 2 | De Broe ME et al., Clinical experience with prolonged comb…, Artificial organs (1981) | — |
| <span class="pk-rf" hidden data-species="human" data-age="adult" data-status="Needs review" data-sim="no"></span><span class="pk-badge pk-badge--orange">Needs review</span><br><sub>blocking: disposition incomplete — only clearance/elimination extracted — the engineer ne…</sub> | [Endrenyi_1976_reference](drugs/toxin_amobarbital/Amobarbital_Endrenyi1976_reference.md) | held back | 1-compartment, IV | 3 | Endrenyi L et al., Genetic study of amobarbital eliminatio…, Clinical pharmacology and t… (1976) | [10.1002/cpt1976206701](https://doi.org/10.1002/cpt1976206701) |
| <span class="pk-rf" hidden data-species="human" data-age="paediatric" data-status="Needs review" data-sim="no"></span><span class="pk-badge pk-badge--orange">Needs review</span><br><sub>blocking: disposition incomplete — only clearance/elimination extracted — the engineer ne…</sub> | [Redmond_1978_reference](drugs/toxin_amobarbital/Amobarbital_Redmond1978_reference.md) | held back | 1-compartment, IV | 2 | Redmond GP et al., Effect of human growth hormone on amoba…, Clinical pharmacology and t… (1978) | [10.1002/cpt1978242213](https://doi.org/10.1002/cpt1978242213) |
| <span class="pk-rf" hidden data-species="human" data-age="adult" data-status="Rejected" data-sim="no"></span><span class="pk-badge pk-badge--red">Rejected</span><br><sub>blocking: C5 dimension mismatch on a structural parameter — unit dimension conflicts with…</sub> | [Bachmann_1987_reference](drugs/toxin_amobarbital/Amobarbital_Bachmann1987_reference.md) | — | 1-compartment (no model) | 2 | Bachmann K, Estimating the clearance of amylobarbit…, British journal of clinical… (1987) | [10.1111/j.1365-2125.1987.tb03016.x](https://doi.org/10.1111/j.1365-2125.1987.tb03016.x) |
| <span class="pk-rf" hidden data-species="human" data-age="adult" data-status="Rejected" data-sim="no"></span><span class="pk-badge pk-badge--red">Rejected</span><br><sub>blocking: missing key parameters — none reported by this paper</sub> | [Mawer_1972_reference](drugs/toxin_amobarbital/Amobarbital_Mawer1972_reference.md) | — | parent + metabolite (no model) | 0 | Mawer GE et al., Metabolism of amylobarbitone in patient…, British journal of pharmaco… (1972) | [10.1111/j.1476-5381.1972.tb07292.x](https://doi.org/10.1111/j.1476-5381.1972.tb07292.x) |

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=amobarbital).

| process | tissue | actors (role) | evidence |
|---|---|---|---|

<sub>Actors without a tissue in the table: CHRNA4 (target), CHRNA7 (target), GABRA1 (potentiator), GABRA2 (potentiator), GABRA3 (potentiator), GABRA4 (potentiator), GABRA5 (potentiator), GABRA6 (potentiator), GRIA2 (target), GRIK2 (target).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model runs for this record's scenarios and each one changes the simulation, but the paper reports no values for them to compare with. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-11-12 20:22 | 6:42 | 4/2/0 | 0/0/0 | 0/0/0 | 184,623/35,090 | ollama / glm-5.3-flash | 2 | 0/0 | 2/0 | 0 |

## Coverage

- **PubMed hits:** 57 matched, 57 returned
- **screened:** 6  ·  **relevant:** 6
- **records:** 6  ·  extracted 1  ·  needs review 3  ·  rejected 2  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_11 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Bachmann_1987.pdf` | Bachmann K, Estimating the clearance of amylobarbit…, British journal of clinical… (1987) | popPK | 10 | [10.1111/j.1365-2125.1987.tb03016.x](https://doi.org/10.1111/j.1365-2125.1987.tb03016.x) | [3814466](https://pubmed.ncbi.nlm.nih.gov/3814466) | Human IV amobarbital study reporting clearance (0.032 L/h/kg) and volume of distribution (1.08 L/kg) directly in the abstract. |
| `Endrenyi_1976.pdf` | Endrenyi L et al., Genetic study of amobarbital eliminatio…, Clinical pharmacology and t… (1976) | popPK | 10 | [10.1002/cpt1976206701](https://doi.org/10.1002/cpt1976206701) | [1033050](https://pubmed.ncbi.nlm.nih.gov/1033050) | Reports quantitative kinetic parameters for amobarbital in humans (t½ 22.8 hr, kel 0.051 hr⁻¹, plasma clearance 37.7 ml/min) directly in the abstract. |
| `Redmond_1978.pdf` | Redmond GP et al., Effect of human growth hormone on amoba…, Clinical pharmacology and t… (1978) | popPK | 10 | [10.1002/cpt1978242213](https://doi.org/10.1002/cpt1978242213) | [679599](https://pubmed.ncbi.nlm.nih.gov/679599) | In-human kinetic parameters (half-life, Vd, clearance) for amobarbital are reported numerically in the abstract. |
| `Ritschel_1978.pdf` | Ritschel WA, Age-dependent disposition of amobarbita…, Journal of the American Ger… (1978) | popPK | 10 | [10.1111/j.1532-5415.1978.tb05036.x](https://doi.org/10.1111/j.1532-5415.1978.tb05036.x) | [712023](https://pubmed.ncbi.nlm.nih.gov/712023) | Human pharmacokinetic modeling of amobarbital reports half-life, volume of distribution and metabolism rate constants with numeric values in the abstract itself. |
| `De_1981.pdf` | De Broe ME et al., Clinical experience with prolonged comb…, Artificial organs (1981) | popPK | 9 |  | [7247757](https://pubmed.ncbi.nlm.nih.gov/7247757) | Reports a numeric clearance for amobarbital (121 ± 10 ml/min) measured during HP-HD treatment, directly readable in the abstract. |
| `Sawada_1985.pdf` | Sawada Y et al., Prediction of the disposition of nine w…, Journal of pharmacokinetics… (1985) | popPK | 9 | [10.1007/BF01059331](https://doi.org/10.1007/BF01059331) | [3938813](https://pubmed.ncbi.nlm.nih.gov/3938813) | Amobarbital is a subject drug with rat and human PK parameters (t1/2, CLm, V, CLuint, VT/fuT), but numeric values are not shown in the abstract, likely only in figures/tables not provided. |
| `Mawer_1972.pdf` | Mawer GE et al., Metabolism of amylobarbitone in patient…, British journal of pharmaco… (1972) | popPK | 8 | [10.1111/j.1476-5381.1972.tb07292.x](https://doi.org/10.1111/j.1476-5381.1972.tb07292.x) | [5040665](https://pubmed.ncbi.nlm.nih.gov/5040665) | Directly reports kinetic parameters (rate constants alpha/beta, clearance, compartment model, urinary metabolite excretion) for amylobarbitone in humans; numeric means may be in tables not fully shown. |
| `Kinsella_1979.pdf` | Kinsella HC et al., Effect of paracetamol on amylobarbitone…, The Journal of pharmacy and… (1979) | popPK | 7 | [10.1111/j.2042-7158.1979.tb13458.x](https://doi.org/10.1111/j.2042-7158.1979.tb13458.x) | [34688](https://pubmed.ncbi.nlm.nih.gov/34688) | Human pharmacokinetic study of amylobarbitone reporting total body clearance, but no numeric values appear in the evidence text. |
| `Verpooten_1982.pdf` | Verpooten GA et al., Prediction of the efficacy of hemoperfu…, Archives of toxicology. Sup… (1982) | popPK | 7 | [10.1007/978-3-642-68511-8_54](https://doi.org/10.1007/978-3-642-68511-8_54) | [6954915](https://pubmed.ncbi.nlm.nih.gov/6954915) | A pharmacokinetic (one-compartment) study of amobarbital in severely intoxicated patients, but no numeric parameter values are visible in the evidence, likely residing in tables/figures not provided. |
| `Bachmann_1984.pdf` | Bachmann K et al., Selectivity of cholestyramine treatment…, Pharmacology (1984) | popPK | 6 | [10.1159/000138003](https://doi.org/10.1159/000138003) | [6483959](https://pubmed.ncbi.nlm.nih.gov/6483959) | Amobarbital is a probe substance with pharmacokinetics measured in humans, but the abstract reports only "no demonstrable effect" of cholestyramine with no numeric parameter values shown; actual values presumably in full text/tables not provided. |
| `Tilstone_1978.pdf` | Tilstone WJ et al., Interaction of ethanol with amylobarbit…, Research communications in… (1978) | popPK | 6 |  | [644120](https://pubmed.ncbi.nlm.nih.gov/644120) | The study applies pharmacokinetic models to amylobarbitone (Vd, elimination, half-life) with ethanol co-exposure, but no numeric values appear in the evidence — they presumably live in a table/figure not provided. |

<sub>queue written 2026-11-12 20:19 UTC</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Bachmann_1984 | relevant | 6 | 3 | Amobarbital is a probe substance with pharmacokinetics measured in humans, but the abstract reports only "no demonstrable effect" of cholestyramine with no numeric parameter values shown; actual values presumably in full text/tables not provided. |
| popPK | Chiou_1986 | irrelevant | 3 | 2 | Amobarbital is only one of several drugs reanalyzed via literature-derived clearance data; no numeric amobarbital kinetic values appear in the evidence shown. |
| popPK | Døssing_1985 | irrelevant | 3 | 1 | Review/discussion paper with no numeric kinetic parameter for amobarbital; mentions qualitative unchanged elimination but presents no values. |
| popPK | Foster_1997 | irrelevant | 0 | 0 | This is a paroxetine review; amobarbital appears only as a co-administered probe with no kinetic parameters of its own. |
| PGx | Foster_1997 | not_relevant | 0 | 0 | The paper concerns paroxetine; amobarbital is only mentioned as a co-administered sedative in interaction studies with no pharmacogenomic effect on amobarbital PK/PD reported. |
| popPK | Fu_1997 | irrelevant | 0 | 0 | This is an analytical HPLC methods paper with amobarbital only as an analyte and internal standard; no kinetic parameters are reported. |
| popPK | Khanna_1997 | irrelevant | 0 | 0 | Pharmacodynamic cross-tolerance study in rats with no kinetic parameters for amobarbital reported. |
| popPK | Kinsella_1979 | relevant | 7 | 2 | Human pharmacokinetic study of amylobarbitone reporting total body clearance, but no numeric values appear in the evidence text. |
| popPK | Leyssac_1975 | irrelevant | 0 | 0 | Amytal is used only as an anesthetic agent in rats; no kinetic parameters of amobarbital itself are reported. |
| PGx | Lähdesmäki_1999 | not_relevant | 0 | 0 | No gene variant/genotype/phenotype considered; amobarbital used only as a metabolic inhibitor in a cell respiration assay. |
| popPK | Moody_1977 | irrelevant | 0 | 0 | The kinetic parameters (half-life, Vd) belong to protriptyline; amobarbital appears only as a co-medication with no kinetic parameters of its own. |
| popPK | Olesen_1980 | irrelevant | 0 | 0 | Amobarbital (amytal) is only an anaesthetic vehicle; no kinetic parameters for it are reported. |
| popPK | Ooboshi_1990 | irrelevant | 0 | 0 | Amobarbital appears only as an anesthetic agent for the rats, with no kinetic parameters reported. |
| popPK | Sawada_1985 | relevant | 9 | 4 | Amobarbital is a subject drug with rat and human PK parameters (t1/2, CLm, V, CLuint, VT/fuT), but numeric values are not shown in the abstract, likely only in figures/tables not provided. |
| popPK | Schnelle_1975 | irrelevant | 0 | 0 | no_text gate: only 33 chars of text extracted (&lt; 400) |
| popPK | Thomsen_1981 | irrelevant | 0 | 0 | Amobarbital (Amytal) appears only as an anesthesia agent in a rat kidney study; no kinetic parameters for amobarbital are reported. |
| popPK | Thomsen_1981_2 | irrelevant | 0 | 0 | Amobarbital (amytal) is used only as an anaesthetic agent; no kinetic parameters of amobarbital are reported. |
| popPK | Tilstone_1978 | relevant | 6 | 2 | The study applies pharmacokinetic models to amylobarbitone (Vd, elimination, half-life) with ethanol co-exposure, but no numeric values appear in the evidence — they presumably live in a table/figure not provided. |
| PGx | Toide_2004 | not_relevant | 2 | 3 | Paper identifies UGT isoforms catalyzing amobarbital N-glucosidation via correlation across livers, but no gene variant/genotype effect on PK/PD parameters is reported. |
| popPK | Verpooten_1982 | relevant | 7 | 2 | A pharmacokinetic (one-compartment) study of amobarbital in severely intoxicated patients, but no numeric parameter values are visible in the evidence, likely residing in tables/figures not provided. |
| popPK | Yao_1991 | irrelevant | 0 | 0 | Amobarbital is used only as anesthetic agent; no kinetic parameters of amobarbital are reported. |
| popPK | Yao_1993 | irrelevant | 0 | 0 | Amobarbital appears only as an anesthetic agent (100 mg/kg i.p.) with no kinetic parameters for the substance. |
| popPK | Ylitalo_1991 | irrelevant | 0 | 0 | The paper only mentions amobarbital qualitatively as a low-clearance drug unaffected by exercise, with no numeric kinetic parameters given. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this page](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bamobarbital%5D&body=Drug%3A%20amobarbital%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/toxin_amobarbital/%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · newest extraction 2026-11-12 20:19 UTC</sub>
