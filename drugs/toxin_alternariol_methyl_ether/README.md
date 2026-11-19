<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Toxins&quot;,&quot;href&quot;:&quot;toxins/README.md&quot;},{&quot;label&quot;:&quot;Fungal toxins&quot;,&quot;href&quot;:&quot;toxins/FUNG.md&quot;},{&quot;label&quot;:&quot;Alternariol methyl ether&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;AlternariolMethylEther_den2025_reference&quot;,&quot;label&quot;:&quot;den_2025_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_alternariol_methyl_ether/AlternariolMethylEther_den2025_reference.md&quot;,&quot;status&quot;:&quot;Simulated&quot;,&quot;css&quot;:&quot;pk-badge--blue&quot;,&quot;here&quot;:false}]"></div>

# Alternariol methyl ether

- **generic name:** Alternariol methyl ether
- **T3DB:** [T3D3728](http://www.t3db.ca/toxins/T3D3728) · **PubChem:** [CID 5360741](https://pubchem.ncbi.nlm.nih.gov/compound/5360741)

## About

Alternariol methyl ether is an altertoxin, which is a mycotoxin of Alternaria fungi. Altertoxins are important contaminants in cereals, vegetables, and fruits, as well as in the ground, on wood or walls. Studies have shown altertoxins to be toxic, genotoxic, mutagenic, and carcinogenic. …

- **Category:** Fungal Toxin, Natural Toxin
- **Route of exposure:** oral, dermal, inhalation, and parenteral (contaminated drugs).
- **Sources and uses:** Alternariol methyl ether is an altertoxin, which is a mycotoxin of Alternaria fungi. Altertoxins are important contaminants in cereals, vegetables, and fruits, as well as in the ground, on wood or walls.
- **Mechanism of toxicity:** Alternariol methyl ether has been shown to have genotoxic and mutagenic properties. It has demonstrated DNA-damaging activities such as single-strand and double-strand DNA breaks, DNA-intercalating, and DNA cross-linking, as well as induction of DNA repair synthesis and inhibition of DNA replication. …
- **Health effects:** Altertoxins have been shown to be toxic, genotoxic, mutagenic, and carcinogenic. In particular, they have been associated with esophageal cancer in humans.
- **Carcinogenicity:** Not listed by IARC.

<p><small>Toxicology facts: <a href="http://www.t3db.ca/toxins/T3D3728">T3DB T3D3728</a> (free for non-commercial use with attribution), quoted in part; reference markers removed; the description above is T3DB's too.</small></p>

<p><small>Also: CAS 23452-05-3</small></p>

## Molecular properties

> Molar masses support mass–molar conversion and metabolite stoichiometry. Sources: DrugBank (parent), reported values or identity-matched PubChem entries (metabolites).

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| alternariol_methyl_ether | metabolite | 272.256 | C15H12O5 | PubChem | [5360741](https://pubchem.ncbi.nlm.nih.gov/compound/5360741) | den_2025 |
| AME-3-sulfate | metabolite | — (mass units only) | — | — | — | — |
| AME-glucuronide | metabolite | — (mass units only) | — | — | — | — |
| AOH-glucuronide | metabolite | — (mass units only) | — | — | — | — |

## Start here

> **den_2025_reference** — <span class="pk-badge pk-badge--blue">Simulated</span> piglets (weaned, ~4–8 weeks of age, ~6–20 kg b.w.), n = 6. [Run it in the simulator](drugs/toxin_alternariol_methyl_ether/AlternariolMethylEther_den2025_reference.md?tab=Simulation) · [record](drugs/toxin_alternariol_methyl_ether/AlternariolMethylEther_den2025_reference.md)

<sub>Chosen automatically: the best-status record that runs in the browser, preferring a healthy, human population and values taken from the paper.</sub>

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-rf" hidden data-species="pig" data-age="unknown" data-status="Simulated" data-sim="yes"></span><span class="pk-badge pk-badge--blue">Simulated</span> <span class="pk-badge pk-badge--species" title="Animal study (pig), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">pig</span> | [den_2025_reference](drugs/toxin_alternariol_methyl_ether/AlternariolMethylEther_den2025_reference.md) | ▶ model + simulator | retention, 1 pool | 2 | den Hollander D et al., Absolute oral bioavailability, quantita…, Archives of toxicology (2025) | [10.1007/s00204-025-04050-y](https://doi.org/10.1007/s00204-025-04050-y) |
| <span class="pk-rf" hidden data-species="pig" data-age="unknown" data-status="Rejected" data-sim="no"></span><span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--species" title="Animal study (pig), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">pig</span><br><sub>blocking: C5 dimension mismatch on a structural parameter — unit dimension conflicts with…</sub> | [↳ ame](drugs/toxin_alternariol_methyl_ether/AlternariolMethylEther_den2025_ame.md) | — | 1-compartment (no model) | 10 |  |  |
| <span class="pk-rf" hidden data-species="human + animal" data-age="mixed" data-status="Needs review" data-sim="no"></span><span class="pk-badge pk-badge--orange">Needs review</span> <span class="pk-badge pk-badge--species" title="The paper reports both human and animal data (from the LLM relevance screen, p(non-human) 0.50).">human + animal</span><br><sub>blocking: disposition incomplete — only clearance/elimination extracted — the engineer ne…</sub><br><sub>blocking: C5 dimensioned parameter(s) without a unit: Q22 — no SI value to build from</sub> | [Borsos_2026_in_silico](drugs/toxin_alternariol_methyl_ether/AlternariolMethylEther_Borsos2026_in_silico.md) | held back | 1-compartment, IV | 4 | Borsos E et al., Human internal exposures to alternariol…, Archives of toxicology (2026) | [10.1007/s00204-026-04485-x](https://doi.org/10.1007/s00204-026-04485-x) |
| <span class="pk-rf" hidden data-species="human + animal" data-age="mixed" data-status="Needs review" data-sim="no"></span><span class="pk-badge pk-badge--orange">Needs review</span> <span class="pk-badge pk-badge--species" title="The paper reports both human and animal data (from the LLM relevance screen, p(non-human) 0.50).">human + animal</span><br><sub>blocking: disposition incomplete — only clearance/elimination extracted — the engineer ne…</sub><br><sub>blocking: C5 dimensioned parameter(s) without a unit: Q22 — no SI value to build from</sub> | [↳ in_vivo](drugs/toxin_alternariol_methyl_ether/AlternariolMethylEther_Borsos2026_in_vivo.md) | held back | 1-compartment, IV | 4 |  |  |
| <span class="pk-rf" hidden data-species="human + animal" data-age="mixed" data-status="Rejected" data-sim="no"></span><span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--species" title="The paper reports both human and animal data (from the LLM relevance screen, p(non-human) 0.50).">human + animal</span><br><sub>blocking: C5 dimension mismatch on a structural parameter — unit dimension conflicts with…</sub> | [↳ alternariol_monomethyl_ether_ame](drugs/toxin_alternariol_methyl_ether/AlternariolMethylEther_Borsos2026_alternariol_monomethyl_eth.md) | — | 1-compartment (no model) | 4 |  |  |
| <span class="pk-rf" hidden data-species="human + animal" data-age="mixed" data-status="Rejected" data-sim="no"></span><span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--species" title="The paper reports both human and animal data (from the LLM relevance screen, p(non-human) 0.50).">human + animal</span><br><sub>blocking: C5 dimension mismatch on a structural parameter — unit dimension conflicts with…</sub> | [↳ female](drugs/toxin_alternariol_methyl_ether/AlternariolMethylEther_Borsos2026_female.md) | — | 1-compartment (no model) | 2 |  |  |
| <span class="pk-rf" hidden data-species="human + animal" data-age="mixed" data-status="Rejected" data-sim="no"></span><span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--species" title="The paper reports both human and animal data (from the LLM relevance screen, p(non-human) 0.50).">human + animal</span><br><sub>blocking: C5 dimension mismatch on a structural parameter — unit dimension conflicts with…</sub> | [↳ male](drugs/toxin_alternariol_methyl_ether/AlternariolMethylEther_Borsos2026_male.md) | — | 1-compartment (no model) | 4 |  |  |
| <span class="pk-rf" hidden data-species="human + animal" data-age="mixed" data-status="Rejected" data-sim="no"></span><span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--species" title="The paper reports both human and animal data (from the LLM relevance screen, p(non-human) 0.50).">human + animal</span><br><sub>blocking: C5 dimension mismatch on a structural parameter — unit dimension conflicts with…</sub> | [↳ male_child](drugs/toxin_alternariol_methyl_ether/AlternariolMethylEther_Borsos2026_male_child.md) | — | 1-compartment (no model) | 2 |  |  |
| <span class="pk-rf" hidden data-species="human + animal" data-age="mixed" data-status="Rejected" data-sim="no"></span><span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--species" title="The paper reports both human and animal data (from the LLM relevance screen, p(non-human) 0.50).">human + animal</span><br><sub>blocking: C5 dimension mismatch on a structural parameter — unit dimension conflicts with…</sub> | [↳ maletoddler](drugs/toxin_alternariol_methyl_ether/AlternariolMethylEther_Borsos2026_maletoddler.md) | — | 1-compartment (no model) | 2 |  |  |
| <span class="pk-rf" hidden data-species="pig" data-age="unknown" data-status="Rejected" data-sim="no"></span><span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--species" title="Animal study (pig), not measured in people (from the LLM relevance screen, p(non-human) 0.90).">pig</span><br><sub>blocking: C8 unreachable/orphan compartment or unlinked metabolite</sub> | [Fraeyman_2017_reference](drugs/toxin_alternariol_methyl_ether/AlternariolMethylEther_Fraeyman2017_reference.md) | — | 2-compartment (no model) | 3 | Fraeyman S et al., Emerging Fusarium and Alternaria Mycoto…, Toxins (2017) | [10.3390/toxins9070228](https://doi.org/10.3390/toxins9070228) |
| <span class="pk-rf" hidden data-species="rat" data-age="adult" data-status="Rejected" data-sim="no"></span><span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">rat</span><br><sub>blocking: missing key parameters — none reported by this paper</sub> | [Puntscher_2019_reference](drugs/toxin_alternariol_methyl_ether/AlternariolMethylEther_Puntscher2019_reference.md) | — | general linear (no model) | 0 | Puntscher H et al., First insights into Alternaria multi-to…, Toxicology letters (2019) | [10.1016/j.toxlet.2018.10.006](https://doi.org/10.1016/j.toxlet.2018.10.006) |

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model is built and runs, and no check contradicts it, but no value the paper reported was compared with its simulation (none reported, or none extracted). Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-11-15 14:49 | 30:10 | 3/8/0 | 0/0/0 | 0/0/0 | 867,472/104,035 | ollama / glm-5.3-flash | 29 | 1/26 | 29/0 | 0 |

## Coverage

- **PubMed hits:** 83 matched, 83 returned
- **screened:** 3  ·  **relevant:** 3
- **records:** 11  ·  extracted 1  ·  needs review 2  ·  rejected 8  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_1 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Puntscher_2019.pdf` | Puntscher H et al., First insights into Alternaria multi-to…, Toxicology letters (2019) | popPK | 7 | [10.1016/j.toxlet.2018.10.006](https://doi.org/10.1016/j.toxlet.2018.10.006) | [30321595](https://pubmed.ncbi.nlm.nih.gov/30321595) | Reports quantitative excretion/recovery percentages of AME (and its metabolite AME-3-sulfate) in rat urine and feces after dosing; values given in abstract. |

<sub>queue written 2026-11-15 14:36 UTC</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Ayeni_2023 | irrelevant | 0 | 0 | Biomonitoring exposure study reporting urinary concentrations (detection rate and median) only, with no kinetic parameters for alternariol methyl ether. |
| popPK | Ayeni_2024 | irrelevant | 2 | 2 | This is a human biomonitoring/exposure study reporting only measured mycotoxin concentrations (e.g., AME median 3 ng/L in breast milk, quantified in stool/urine) with no kinetic parameters (half-life, clearance, rate constants, or a disposition model) of any kind; detailed values also live in supplementary tables. |
| popPK | Ayeni_2026 | irrelevant | 0 | 0 | Biomonitoring exposure study with detection frequencies only; no kinetic parameters for alternariol monomethyl ether. |
| popPK | Borsos_2024 | relevant | 8 | 3 | The paper reports Km, Vmax and intrinsic hepatic clearance of AME in liver microsomes, but Table 1 with the actual numeric values is not included in the evidence. |
| popPK | Braun_2020 | irrelevant | 2 | 4 | This is a breast-milk exposure/occurrence study; AME concentrations (e.g., max 58 ng/L) are exposure biomonitoring, not kinetic parameters (no half-life, clearance, or model), and detailed values partly only in supplementary material. |
| popPK | Braun_2020_2 | irrelevant | 0 | 0 | This is an analytical-method/biomonitoring paper; AME concentrations in breast milk are exposure occurrence data, not kinetic parameters (no half-life, clearance, rate constants or disposition model). |
| popPK | Braun_2022 | irrelevant | 1 | 1 | Exposure/occurrence study measuring concentrations of alternariol monomethyl ether in food, breast milk and urine only; no kinetic parameters (half-life, clearance, rate constants) and no numeric values in the evidence. |
| popPK | Butler_2021 | irrelevant | 0 | 0 | "AME" here means aminoglycoside-modifying enzyme in a bacterial infection model; alternariol methyl ether is not a subject substance and no toxicokinetic parameters for it appear. |
| popPK | Chauhan_2020 | irrelevant | 0 | 0 | The kinetic parameters belong to a 68Ga-DOTA phosphonate bone imaging tracer, not to alternariol methyl ether (AME is only part of a ligand acronym), so no toxicokinetic parameters for the subject substance exist. |
| popPK | Clark_2020 | irrelevant | 0 | 0 | The paper is about the antibiotic plazomicin ("AMEs" refers to aminoglycoside-modifying enzymes, not alternariol methyl ether); no alternariol methyl ether data at all. |
| popPK | Dahlgren_2017 | irrelevant | 0 | 0 | "AME" here means absorption-modifying excipients in a rat intestinal perfusion study; alternariol methyl ether is not the substance and no kinetic parameters for it exist. |
| popPK | Dahlgren_2018 | irrelevant | 0 | 0 | The paper studies absorption-modifying excipients (SDS, chitosan) in rats; "AME" here means absorption-modifying excipient, not the mycotoxin alternariol methyl ether, and no kinetic parameters for it appear. |
| popPK | Dahlgren_2018_2 | irrelevant | 0 | 0 | "AME" here means absorption-modifying excipients, not alternariol methyl ether; no toxicokinetic parameters for alternariol methyl ether are reported. |
| popPK | Darquenne_2026 | irrelevant | 0 | 0 | A study of lung clearance index in CF patients with no kinetic parameters for alternariol methyl ether; the substance does not appear at all. |
| popPK | Dellafiora_2015 | irrelevant | 1 | 0 | In silico molecular modelling of topoisomerase poisoning with no kinetic parameters for AME measured in any organism; binding predictions, not kinetic data. |
| popPK | Fan_2021 | irrelevant | 2 | 2 | Biomonitoring exposure study reporting only urinary concentrations and probable daily intakes for AME; no kinetic parameter (excretion rates are cited from other rat/human studies, not measured here). |
| popPK | Firsov_1991 | irrelevant | 0 | 0 | "AME" here means antimicrobial effect, not alternariol methyl ether; the paper concerns sisomicin and cefotaxime in an in vitro simulation with no alternariol methyl ether data. |
| popPK | Firsov_2000 | irrelevant | 0 | 0 | The paper concerns antibiotics (moxifloxacin/levofloxacin); "AME" here means antimicrobial effect, with no kinetic data for alternariol methyl ether. |
| popPK | Forero-Torres_2012 | irrelevant | 0 | 0 | "AME-133v" is a monoclonal anti-CD20 antibody drug code, not the chemical alternariol methyl ether, and no toxicokinetic parameter for the subject substance is reported. |
| popPK | Fraeyman_2017 | irrelevant | 1 | 1 | This is a review whose quantitative toxicokinetic parameters (bioavailability, clearance, Vd) concern enniatins and TeA; AME is mentioned only for occurrence and genotoxicity, with no kinetic values for it. |
| popPK | García-Nicolás_2026 | irrelevant | 0 | 5 | Analytical method-validation and occurrence study; AME detection (3.1 µg/kg in pig liver) is a measured concentration, not any kinetic parameter (no half-life, clearance, rate constant, partition, or model). |
| popPK | Helleberg_2021 | irrelevant | 0 | 0 | The paper concerns somapacitan, a growth hormone derivative; alternariol methyl ether appears nowhere, and any kinetic parameters belong to a different substance. |
| popPK | Helleberg_2022 | irrelevant | 0 | 0 | The paper reports PK of somapacitan and its metabolites, not alternariol methyl ether, so no parameters for the subject substance exist. |
| PGx | Hohenbichler_2020 | not_relevant | 2 | 5 | The paper tests Alternaria toxin effects on CYP1 EROD activity in vitro, but contains no gene variant/genotype/phenotype-driven PK or PD effect for AME. |
| popPK | Issa_2022 | irrelevant | 0 | 0 | The paper studies xanthotoxin/other Ammi majus compounds in cancer cells; alternariol methyl ether never appears, and no kinetic parameters of any substance are reported. |
| popPK | Jagdis_1977 | irrelevant | 0 | 0 | The paper concerns amphotericin B methyl ester (AME), a different substance from alternariol methyl ether, despite the shared AME abbreviation; no alternariol methyl ether data are reported. |
| popPK | Jensen_2017 | irrelevant | 0 | 0 | The paper's toxicokinetic parameters concern semaglutide, not alternariol methyl ether, which does not appear at all in the evidence. |
| popPK | Krausová_2022 | irrelevant | 0 | 0 | AME appears only as an analytical target and detected contaminant (8/10 Nigerian samples) with no kinetic parameters like half-life, clearance, or partition coefficients reported. |
| popPK | Krausová_2024 | irrelevant | 1 | 3 | This is a human biomonitoring/exposure study reporting only urinary concentrations and probable daily intakes for alternariol monomethyl ether, with no kinetic parameter (half-life, clearance, rate constant, PBPK model, etc.); the few numbers present are exposure concentrations, not toxicokinetic parameters. |
| popPK | Liu_2020 | irrelevant | 1 | 2 | This is an analytical method-development and urinary biomonitoring study; AME appears only as an analyte with measured urine concentrations (detection rate, &lt;LOD–0.167 ng/mL) and no toxicokinetic parameters like half-life, clearance, or partition coefficients. |
| popPK | Madaras-Kelly_2002 | irrelevant | 0 | 0 | The paper concerns fluoroquinolone pharmacodynamics in S. pneumoniae with no kinetic parameters for alternariol methyl ether. |
| popPK | Madden_2026 | irrelevant | 0 | 0 | All kinetic parameters (t1/2, CL, Vd, Fabs, AUC) belong to sevasemten (EDG-5506), not alternariol methyl ether, which is never mentioned. |
| popPK | Mihalache_2026 | irrelevant | 0 | 0 | Human biomonitoring/exposure study measuring urinary concentrations and dietary associations only, with no kinetic parameter for AME. |
| popPK | Moghim_2026 | irrelevant | 0 | 0 | This is a phage/plant-extract antibacterial efficacy study; "AME" here is Alhagi maurorum extract, not alternariol methyl ether, and no kinetic parameters for the substance are reported. |
| popPK | Mu_2021 | irrelevant | 0 | 0 | The paper reports quantitative PK parameters (half-life, clearance, AUC) for pamiparib, not for alternariol methyl ether, which does not appear at all. |
| popPK | Mvondo_2015 | irrelevant | 0 | 0 | The paper concerns abyssinone V 4'-methylether, a different substance, and reports only gene expression outcomes with no toxicokinetic parameters. |
| popPK | Nazarov_1991 | irrelevant | 0 | 0 | "AME" here means antimicrobial effect, not alternariol methyl ether, and the paper concerns cephalosporins in vitro. |
| popPK | Osteresch_2017 | irrelevant | 0 | 0 | Analytical method/biomonitoring paper for mycotoxin detection in human dried blood/serum spots; AME appears only as an analyte with validation parameters (LOD/LOQ/recovery), no toxicokinetic parameters. |
| popPK | Pathak_2026 | irrelevant | 0 | 0 | The kinetic parameters (bioavailability, clearance, half-life) belong to drug E7386, not alternariol methyl ether; the target substance never appears. |
| popPK | Peris-Camarasa_2025 | irrelevant | 2 | 1 | This is a human urinary biomonitoring/exposure study; AME appears only as a measured urinary concentration among 12 mycotoxins, with no kinetic parameter (half-life, clearance, excretion fraction, etc.) reported for AME itself — risk assessment excluded AME (DF ≤25%), and no numeric AME values appear in the provided evidence. |
| popPK | Qiao_2020 | irrelevant | 1 | 1 | This is an analytical-method development and human exposure biomonitoring study; no kinetic parameters (half-life, clearance, etc.) for AME are reported. |
| popPK | Qiao_2022 | irrelevant | 1 | 1 | This is a human biomonitoring/exposure study measuring urinary AME concentrations and estimated daily intake, with no kinetic parameters (half-life, clearance, rate constants, etc.). |
| popPK | Rahbaek_2024 | irrelevant | 0 | 0 | The paper's kinetic parameters all concern adagrasib, not alternariol methyl ether; the substance of interest does not appear. |
| popPK | Schmidt_2021 | irrelevant | 2 | 1 | This is an analytical method-validation and biomonitoring study; AME appears only as an analyte with LOD/LOQ values, no toxicokinetic parameters (half-life, clearance, partitioning, metabolism kinetics) are reported. |
| popPK | Schueller_2022 | irrelevant | 0 | 0 | The paper reports kinetic parameters for belumosudil, not alternariol methyl ether, which does not appear as the subject substance. |
| popPK | Seong_2026 | irrelevant | 0 | 0 | "AME" here means aminoglycoside-modifying enzymes, not alternariol methyl ether; the paper is a clinical outcome study with no toxicokinetic parameters for the substance. |
| popPK | Su_2026 | irrelevant | 0 | 0 | "AME" here means apparent metabolizable energy of dietary fats, not the mycotoxin alternariol methyl ether; no kinetic parameters of the substance. |
| popPK | Sukumar_2022 | irrelevant | 0 | 0 | This is an epidemiological hypertension study in automobile workers with no kinetic parameters for alternariol methyl ether; the substance is not mentioned at all. |
| popPK | Takahashi_2019 | irrelevant | 0 | 0 | The paper concerns the drug GDC-0276 in beagle dogs; alternariol methyl ether does not appear at all. |
| popPK | Tanwar_2011 | irrelevant | 0 | 0 | The kinetic parameters (blood half-lives, biodistribution) belong to the radiopharmaceutical DO3P-AME-DO3P, not to alternariol methyl ether, which does not appear as the subject substance. |
| popPK | Tkaczyk_2021 | irrelevant | 1 | 1 | Analytical method development paper for biomarker detection in pig urine; AME appears only as an analyte/standard with analytical recovery parameters, not toxicokinetic parameters. |
| popPK | Tran_2020 | irrelevant | 0 | 0 | The drug studied is asciminib, not alternariol-methyl-ether; no kinetic parameters for the subject substance exist in this paper. |
| popPK | Upthagrove_2017 | irrelevant | 0 | 0 | The paper reports toxicokinetics of pradigastat, not alternariol methyl ether; alternariol methyl ether does not appear at all. |
| popPK | Verbanck_2018 | irrelevant | 0 | 0 | Lung ventilation washout simulation study with no alternariol_methyl_ether or any toxicokinetic parameters. |
| popPK | Verbanck_2020 | irrelevant | 0 | 0 | Lung nitrogen-washout physiology study in smokers; "clearance" refers to lung ventilation, no kinetic parameters for alternariol methyl ether appear anywhere. |
| popPK | Vilela_2025 | irrelevant | 3 | 3 | Review summarizing toxicokinetics of Alternaria toxins; only bioavailability values (15%, 9%) appear in passing and likely cite original studies, with no detailed kinetic parameters of its own for AME. |
| popPK | Vincenti_2015 | irrelevant | 0 | 0 | This is a tofacitinib outcome study in kidney transplant patients; "AME" here means above-median exposure, not alternariol methyl ether, and no toxicokinetic parameters for alternariol methyl ether appear. |
| popPK | Visintin_2024 | irrelevant | 2 | 5 | This is an analytical method-validation paper; only a few measured concentrations of AME (e.g., 0.16 ng/mL blood, 7.86 ng/g feces) from a 3-volunteer pilot appear, but no kinetic parameters (half-life, clearance, rates, model). |
| popPK | Vostrov_2000 | irrelevant | 0 | 0 | This paper concerns gatifloxacin and ciprofloxacin pharmacodynamics in bacteria; "AME" means antimicrobial effect, and alternariol methyl ether never appears. |
| popPK | Wang-Lakshman_2021 | irrelevant | 0 | 0 | All kinetic parameters belong to licogliflozin, a different substance; alternariol methyl ether does not appear in the evidence. |
| popPK | Wang_2023 | irrelevant | 0 | 0 | The paper reports kinetic parameters for navoximod (GDC-0919), not alternariol methyl ether, which does not appear as the subject substance. |
| popPK | Xiong_2015 | irrelevant | 0 | 0 | The paper reports kinetics of flavonoid C-glycosides (vicenin-2, isoschaftoside, schaftoside) from Abrus mollis, not alternariol methyl ether. |
| popPK | Zhang_2024 | relevant | 7 | 3 | Review reports rat PK parameters for amentoflavone (AME), but the full PK table values appear in a table mostly not rendered; only V/F 198.36±17.422 L/kg and excretion rates (23.93%, 0.82%) are readable in the text. |
| popPK | Zheng_2025 | irrelevant | 0 | 0 | The paper reports kinetic parameters (t1/2, excretion) for pruxelutamide (GT0918), not alternariol methyl ether; no alternariol methyl ether data appear in the evidence. |
| popPK | Zinner_1999 | irrelevant | 0 | 0 | "AME" in this paper means antimicrobial effect of fluoroquinolones, not alternariol methyl ether; no toxicokinetic parameters of the substance appear. |
| popPK | de_2019 | irrelevant | 0 | 0 | The paper's kinetic parameters all concern apalutamide, not alternariol methyl ether, which does not appear at all. |
| popPK | van_2017 | irrelevant | 0 | 0 | The paper quantifies niraparib and its metabolite M1, not alternariol methyl ether, so no relevant toxicokinetic parameters are present. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this page](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Balternariol_methyl_ether%5D&body=Drug%3A%20alternariol_methyl_ether%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/toxin_alternariol_methyl_ether/%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · newest extraction 2026-11-15 14:37 UTC</sub>
