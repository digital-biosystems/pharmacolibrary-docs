<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;P01A&quot;,&quot;href&quot;:&quot;atc/P01A.md&quot;},{&quot;label&quot;:&quot;mepacrine&quot;}]"></div>

# mepacrine

- **generic name:** mepacrine
- **ATC codes:** `P01AX05`
- **DrugBank:** [DB01103](https://go.drugbank.com/drugs/DB01103) · **PubChem:** none
- **groups:** investigational

## About

Mepacrine, known as quinacrine, is an antiprotozoal and antimalarial drug used to treat giardiasis and malaria caused by Plasmodium falciparum.

<small>Summary written by `qwen3.8-27b` from [Wikidata Q417208](https://www.wikidata.org/wiki/Q417208) and the WHO ATC classification; not checked by a person.</small>

## popPK records

_not available_

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--orange">Needs review</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Nguyen_2008_PrP_Sc](drugs/drug_mepacrine/pd_Nguyen_2008_PrP_Sc.md) | PrP(Sc) biomarker turnover ← mepacrine | — | Nguyen TH et al., Antiprion activity of functionalized 9-…, Bioorganic & medicinal chem… (2008) | [10.1016/j.bmc.2008.05.060](https://doi.org/10.1016/j.bmc.2008.05.060) |
| <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Tiberghien_1996_calcein_retention](drugs/drug_mepacrine/pd_Tiberghien_1996_calcein_retention.md) | calcein retention ← quinacrine · direct sigmoid Emax (Hill) effect | — | Tiberghien F et al., Ranking of P-glycoprotein substrates an…, Anti-cancer drugs (1996) | [10.1097/00001813-199607000-00012](https://doi.org/10.1097/00001813-199607000-00012) |

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model is built and runs, and no check contradicts it, but no value the paper reported was compared with its simulation (none reported, or none extracted). Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-11-24 01:05 | 0:04 | 0/0/0 | 1/1/0 | 0/0/0 | 4,145/191 | einfracz / qwen3.8-27b | 18 | 6/2 | 8/0 | 0 |

## Coverage

- **PubMed hits:** 67 matched, 31 returned
- **screened:** 1  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Abdalla_1991 | irrelevant | 0 | 0 | The study focuses on the pharmacology of thalicminine, not mepacrine, and quinacrine is only used as a probe drug. |
| PGx | Abdalla_1991 | not_relevant | 0 | 0 | The paper studies the pharmacology of thalicminine, not mepacrine, and does not report pharmacogenomic effects. |
| popPK | Anantpadma_2019 | irrelevant | 0 | 0 | This is an in vitro Ebola antiviral screening/ML study; quinacrine (mepacrine) is only a screening hit with EC50 values, no PK disposition parameters. |
| popPK | Awumey_2008 | irrelevant | 0 | 0 | The paper investigates the pharmacology of rat mesenteric arteries and mentions quinacrine (a related drug) only as an inhibitor, containing no pharmacokinetic data for mepacrine. |
| PGx | Awumey_2008 | not_relevant | 0 | 0 | The paper discusses quinacrine as an inhibitor in a vascular relaxation study and does not report any pharmacogenomic effects on the PK or PD of mepacrine. |
| popPK | Balasubramanian_2017 | irrelevant | 0 | 0 | The paper describes antiviral activity (EC50) in cell cultures and does not report pharmacokinetic parameters for mepacrine (or quinacrine). |
| PGx | Balasubramanian_2017 | not_relevant | 0 | 0 | The paper reports antiviral activities of mepacrine (quinacrine) and other antimalarials against Dengue and Zika viruses, but contains no information on pharmacogenomics or genetic variants affecting PK/PD. |
| popPK | Barkai_1989 | irrelevant | 0 | 0 | The paper is a mechanistic study of arachidonate turnover in rat brain slices where mepacrine is used only as a phospholipase A-2 inhibitor, with no pharmacokinetic parameters for mepacrine reported. |
| PGx | Barkai_1989 | not_relevant | 0 | 0 | The paper reports on the effects of neurotransmitters on phospholipid turnover in rat brain slices and mentions mepacrine only as a non-pharmacogenomic inhibitor, providing no data on gene variants affecting its PK/PD. |
| popPK | Bhardwaj_1988 | irrelevant | 0 | 0 | The study investigates the mechanism of action of endothelium-derived relaxing factor (EDRF) in perfused rat tissues and uses mepacrine as a pharmacological tool to inhibit EDRF, reporting no pharmacokinetic parameters for mepacrine. |
| PGx | Bhardwaj_1988 | not_relevant | 0 | 0 | The paper studies the mechanism of action of mepacrine as an EDRF inhibitor in rats but does not investigate the effect of any gene variant or genotype on its PK or PD parameters. |
| popPK | Bhardwaj_1988_2 | irrelevant | 0 | 0 | The study investigates the vasodilator response to acetylcholine in rat kidneys, using mepacrine only as a pharmacological probe/inhibitor to identify EDRF, rather than measuring its pharmacokinetic parameters. |
| PGx | Bhardwaj_1988_2 | not_relevant | 0 | 0 | The paper reports the effect of disease (diabetes) on vascular response and uses mepacrine as a blocker to identify EDRF; it does not report pharmacogenomic effects on the PK/PD of mepacrine itself. |
| popPK | Brammer_1984 | irrelevant | 0 | 0 | The paper is an in-vitro mechanistic study of platelet aggregation where mepacrine is used as a pharmacological inhibitor (phospholipase A2 inhibitor), not as a subject of pharmacokinetic analysis. |
| PGx | Brammer_1984 | not_relevant | 0 | 0 | The paper studies the pharmacological effects of mepacrine on platelet aggregation and lipid metabolism but does not report any genetic variants or pharmacogenomic data affecting its PK or PD. |
| popPK | Castaing_2000 | irrelevant | 0 | 0 | The study is an in vitro mechanistic investigation of liposome permeation and thermodynamics, reporting no pharmacokinetic parameters (CL, V, t1/2) for mepacrine. |
| PGx | Castaing_2000 | not_relevant | 0 | 0 | The study investigates the biophysical properties of mepacrine in liposomes (membrane permeation/thermodynamics) and contains no human genetic or pharmacogenomic data. |
| popPK | Castaing_2000_2 | irrelevant | 0 | 0 | The study is an in vitro mechanistic investigation of membrane permeation in liposomes and does not report pharmacokinetic disposition parameters for mepacrine in a biological system. |
| PGx | Castaing_2000_2 | not_relevant | 0 | 0 | The paper investigates the physicochemical properties (charge and lipophilicity) affecting membrane permeation of MDR modulators in liposomes, and does not report any pharmacogenomic effects on pharmacokinetic or pharmacodynamic parameters. |
| popPK | Castaing_2001 | irrelevant | 0 | 0 | The study is an in-vitro investigation of membrane permeation and MDR reversal mechanisms using liposomes, not a pharmacokinetic study reporting disposition parameters like clearance or volume of distribution for mepacrine. |
| PGx | Castaing_2001 | not_relevant | 0 | 0 | The paper studies the physicochemical properties of MDR modulators and their interaction with liposomes, not a pharmacogenomic effect on mepacrine PK/PD. |
| popPK | Gayrard_2005_2 | irrelevant | 0 | 10 | The study investigates the pharmacokinetics of quinacrine (4-amino-6-chloro-2-methylphenyl ether), not mepacrine (8-amino-6-chloroquinoline), which are distinct chemical compounds. |
| PGx | Gayrard_2005_2 | not_relevant | 0 | 0 | The study investigates the pharmacokinetics of quinacrine in sheep and humans but does not analyze any genetic variants or genotypes. |
| popPK | Goldie_1986 | irrelevant | 0 | 0 | The paper is a study on beta-agonist desensitization in pig bronchus where mepacrine is used only as a tool compound (phospholipase A2 inhibitor) to test mechanisms, not as a subject of pharmacokinetic analysis. |
| PGx | Goldie_1986 | not_relevant | 0 | 0 | The paper discusses mepacrine only as a non-significant control in a study on beta-agonist desensitization in pig bronchus and does not report any pharmacogenomic effects. |
| popPK | Hansen_2015 | irrelevant | 0 | 0 | This is an in vitro calcium electroporation study using quinacrine only as an ATP fluorescent marker; no mepacrine PK parameters are reported. |
| popPK | Hellstrand_2002 | irrelevant | 0 | 0 | The paper describes in vitro pharmacological mechanisms of dopamine receptors and COX-2, and does not report any pharmacokinetic parameters for mepacrine. |
| PGx | Hellstrand_2002 | not_relevant | 0 | 0 | The paper investigates the mechanism of dopamine D2 receptor signaling in transfected cells and does not study mepacrine or pharmacogenomic effects on its PK/PD parameters. |
| popPK | Henriquez-Figuereo_2023 | irrelevant | 0 | 0 | The paper is an in-vitro study of selenocyanate/diselenide derivatives against Leishmania, using mepacrine only as a comparator/reference drug for enzyme inhibition, with no PK parameters reported for mepacrine. |
| PGx | Henriquez-Figuereo_2023 | not_relevant | 0 | 0 | The paper describes new selenocyanate and diselenide compounds for leishmaniasis and does not report any pharmacogenomic effects on PK/PD parameters of mepacrine. |
| popPK | Jackson_1996 | irrelevant | 0 | 0 | The study investigates the vasodilatory properties of maxadilan in isolated rabbit tissues and does not report any pharmacokinetic parameters for mepacrine. |
| PGx | Jackson_1996 | not_relevant | 0 | 0 | The paper studies maxadilan, not mepacrine, and does not report pharmacogenomic effects. |
| popPK | Jeremy_1987 | irrelevant | 0 | 0 | Mepacrine is used solely as a pharmacological inhibitor (PLA2 inhibitor) in an in vitro mechanistic study of astrocytes, with no pharmacokinetic parameters reported for mepacrine itself. |
| PGx | Jeremy_1987 | not_relevant | 0 | 0 | The paper investigates the mechanism of prostanoid synthesis in astrocytes using mepacrine as an enzyme inhibitor and contains no data on gene variants or pharmacogenomics. |
| popPK | Klingenstein_2006 | irrelevant | 0 | 0 | The paper focuses on the mechanism of action of antiprion compounds (including quinacrine, a relative of mepacrine) in cell culture, without reporting pharmacokinetic disposition parameters. |
| PGx | Klingenstein_2006 | not_relevant | 0 | 0 | The paper investigates the mechanism of action of quinacrine and related compounds against prions, containing no pharmacogenomic data or analysis of gene variants affecting pharmacokinetics or pharmacodynamics. |
| popPK | Korth_2001 | irrelevant | 0 | 0 | The paper is an in-vitro mechanistic study on prion inhibition and does not report quantitative pharmacokinetic parameters for mepacrine. |
| PGx | Korth_2001 | not_relevant | 0 | 0 | The paper reports in vitro antiprion activity of quinacrine and analogs, not a pharmacogenomic effect on the PK or PD parameters of mepacrine. |
| popPK | Nasuhara_1996 | irrelevant | 0 | 0 | The study investigates the mechanism of EGF-induced airway contraction in guinea pigs where mepacrine is used solely as a tool compound (PLA2 inhibitor), not as a subject drug for pharmacokinetic analysis. |
| PGx | Nasuhara_1996 | not_relevant | 0 | 0 | The paper investigates airway contraction mechanisms and does not report any pharmacogenomic effects on the PK or PD of mepacrine. |
| popPK | Nguyen_2008 | irrelevant | 0 | 0 | The paper focuses on the antiprion activity of quinacrine analogs in cell models and does not report pharmacokinetic parameters for mepacrine. |
| PGx | Nguyen_2008 | not_relevant | 0 | 0 | The paper reports the synthesis and antiprion activity of quinacrine analogs but does not mention mepacrine or any pharmacogenomic effects on PK/PD parameters. |
| popPK | Pébay_1999 | irrelevant | 0 | 0 | The paper is a mechanistic study on lysophosphatidic acid signaling in astrocytes where mepacrine is used as an inhibitor, with no pharmacokinetic parameters reported. |
| PGx | Pébay_1999 | not_relevant | 0 | 0 | The paper investigates the pharmacology of lysophosphatidic acid (LPA) in astrocytes and uses mepacrine only as a specific inhibitor to demonstrate mechanism; it does not report any genetic variant's effect on the pharmacokinetics or pharmacodynamics of mepacrine. |
| popPK | Rodgers_2008 | irrelevant | 0 | 0 | The paper studies the chemosensory behavior of ciliates (Tetrahymena and Paramecium) in response to various compounds, including quinacrine (a structural analog of mepacrine), but does not report any pharmacokinetic parameters for mepacrine. |
| PGx | Rodgers_2008 | not_relevant | 0 | 0 | The paper studies ciliate responses to odorants and does not involve mepacrine or pharmacogenomics. |
| popPK | Salas_2021 | irrelevant | 0 | 0 | In-vitro antiviral efficacy study in Vero E6 cells with no pharmacokinetic disposition parameters for quinacrine. |
| popPK | Sastry_1998 | irrelevant | 0 | 0 | The paper studies the effect of nicotine and cotinine on retinal phospholipase A2, using mepacrine only as a positive control inhibitor in an in-vitro assay, not as a subject drug for PK parameter estimation. |
| PGx | Sastry_1998 | not_relevant | 0 | 0 | The study investigates the effect of nicotine and cotinine on retinal phospholipase A2 activity and mentions mepacrine only as a standard inhibitor control; it does not report a pharmacogenomic effect on the PK or PD of mepacrine. |
| popPK | Stokke_1992 | irrelevant | 0 | 0 | The paper describes in-vitro binding studies of quinacrine (not mepacrine) on rat cardiac membranes, not pharmacokinetics of mepacrine. |
| PGx | Stokke_1992 | not_relevant | 0 | 0 | The study examines the effect of quinacrine (an analogue) on nitrendipine binding in rat membranes, not the pharmacogenomic effect on mepacrine pharmacokinetics or pharmacodynamics. |
| popPK | Teng_1997 | irrelevant | 0 | 0 | The paper is a mechanistic study on platelet aggregation by rugosin E, where mepacrine is used only as an inhibitor/comparator, with no pharmacokinetic data reported. |
| PGx | Teng_1997 | not_relevant | 0 | 0 | The paper studies the pharmacodynamics of rugosin E; mepacrine is only mentioned as a non-specific inhibitor, and no genetic variants or pharmacogenomic effects are investigated. |
| popPK | Tiberghien_1996 | irrelevant | 0 | 0 | The study is an in-vitro pharmacological screening assay for P-glycoprotein modulators and does not report pharmacokinetic parameters for mepacrine. |
| PGx | Tiberghien_1996 | not_relevant | 0 | 0 | The paper describes a screening assay for P-glycoprotein modulators and does not report pharmacogenomic effects on the PK or PD of mepacrine. |
| popPK | Vargas_2009 | irrelevant | 0 | 0 | The paper focuses on renal physiology and GPR91 signaling in mice, not the pharmacokinetics of mepacrine. |
| PGx | Vargas_2009 | not_relevant | 0 | 0 | The paper focuses on the physiological regulation of renin release via the GPR91 receptor in macula densa cells and does not involve mepacrine pharmacology. |
| popPK | Yu_1995 | irrelevant | 0 | 0 | The paper is a mechanistic study on astrocyte metabolism where mepacrine is used only as an in vitro inhibitor of phospholipase A2, not as the subject of a pharmacokinetic analysis. |
| PGx | Yu_1995 | not_relevant | 0 | 0 | The paper describes the use of mepacrine as a phospholipase A2 inhibitor to study cytokine effects on astrocyte glucose uptake, not pharmacogenomic effects on mepacrine's PK or PD parameters. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this page](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bmepacrine%5D&body=Drug%3A%20mepacrine%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_mepacrine/%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary</sub>
