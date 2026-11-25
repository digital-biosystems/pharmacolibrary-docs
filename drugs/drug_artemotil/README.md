<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;P01B&quot;,&quot;href&quot;:&quot;atc/P01B.md&quot;},{&quot;label&quot;:&quot;artemotil&quot;}]"></div>

# artemotil

- **generic name:** artemotil
- **ATC codes:** `P01BE04`
- **DrugBank:** [DB13851](https://go.drugbank.com/drugs/DB13851) · **PubChem:** none
- **molar mass:** 312.406 g/mol (C17H28O5) — DrugBank
- **groups:** approved

## About

Artemotil is an antimalarial agent belonging to the artemisinin derivative class, prescribed for infections caused by Plasmodium falciparum that do not respond to chloroquine. Clinical application is limited to severe malarial infections where first-line therapies have failed or are unsuitable.

<small>Summary written by `qwen3.8-27b` from [Wikidata Q72443831](https://www.wikidata.org/wiki/Q72443831), [Wikipedia](https://en.wikipedia.org/wiki/Artemotil?oldid=1330662093) (CC BY-SA 4.0) and the WHO ATC classification; not checked by a person.</small>

## Molecular properties

> Molar masses support mass–molar conversion and metabolite stoichiometry. Sources: DrugBank (parent), reported values or identity-matched PubChem entries (metabolites).

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| arteether | parent | 312.406 | C17H28O5 | DrugBank | — | Benakis_1991 |
| artemotil | parent | 312.406 | C17H28O5 | DrugBank | — | Benakis_1991 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-rf" hidden data-species="dog" data-age="adult" data-status="Rejected" data-sim="no"></span><span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--species" title="Animal study (dog), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">dog</span><br><sub>blocking: C5 dimension mismatch on a structural parameter — unit dimension conflicts with…</sub> | [Benakis_1991_reference](drugs/drug_artemotil/Artemotil_Benakis1991_reference.md) | — | 1-compartment (no model) | 5 | Benakis A et al., Pharmacokinetics of arteether in dog, European journal of drug me… (1991) | [10.1007/BF03189978](https://doi.org/10.1007/BF03189978) |

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model is built and runs, and no check contradicts it, but no value the paper reported was compared with its simulation (none reported, or none extracted). Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-11-23 19:11 | 0:02 | 0/1/0 | 0/0/0 | 0/0/0 | 3,157/153 | einfracz / qwen3.8-27b | 0 | 0/0 | 0/0 | 0 |

## Coverage

- **PubMed hits:** 26 matched, 26 returned
- **screened:** 2  ·  **relevant:** 1
- **records:** 1  ·  extracted 0  ·  needs review 0  ·  rejected 1  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Asimus_2007 | irrelevant | 0 | 0 | The study focuses on the effect of artemisinins on CYP450 enzyme activity using a probe cocktail, rather than determining the population-pharmacokinetic parameters (CL, V, ka) of artemotil. |
| PGx | Asimus_2007 | not_relevant | 0 | 0 | The study investigates the effect of artemotil (and other antimalarials) on CYP450 enzyme activity in a general healthy population, but it does not report any pharmacogenomic findings linking specific gene variants or genotypes to changes in PK or PD parameters. |
| popPK | Benakis_1991 | irrelevant | 0 | 0 | The study measures the pharmacokinetics of arteether, not artemotil. |
| PGx | Benakis_1991 | not_relevant | 0 | 0 | The study reports pharmacokinetic parameters in dogs but does not investigate any gene variant, genotype, or phenotype effects. |
| popPK | Burk_2012 | irrelevant | 0 | 0 | The study is an in vitro mechanistic investigation of CAR receptor activation, not a pharmacokinetic study reporting disposition parameters for artemotil. |
| PGx | Burk_2012 | not_relevant | 0 | 0 | The paper investigates the molecular mechanism of artemisinin derivatives activating CAR receptors, but does not report any gene variant-dependent effects on pharmacokinetic or pharmacodynamic parameters. |
| popPK | Ekins_1999 | irrelevant | 0 | 0 | The study focuses on 3D-QSAR modeling of CYP2B6 substrates and does not report pharmacokinetic parameters for artemotil. |
| PGx | Ekins_1999 | not_relevant | 0 | 0 | The paper focuses on 3D-QSAR modeling for CYP2B6 substrates and does not report pharmacogenomic effects (gene variants) on the PK or PD of artemotil. |
| popPK | Elsherbiny_2008 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of the probe drug mephenytoin and its metabolites to assess CYP induction by artemisinin derivatives, not the PK of the antimalarial drugs themselves. |
| PGx | Elsherbiny_2008 | not_relevant | 0 | 0 | The study investigates CYP enzyme induction by artemisinin derivatives, not the pharmacokinetics or pharmacodynamics of the drug 'artemotil' (a non-existent drug) influenced by genetic variants. |
| popPK | Gabriëls_2003 | irrelevant | 0 | 0 | The paper describes an analytical method (TLC) for artemisinin and derivatives, not a pharmacokinetic study, and does not involve the drug artemotil. |
| PGx | Gabriëls_2003 | not_relevant | 0 | 0 | The paper describes a chemical analysis method (TLC) for artemisinin and does not discuss pharmacogenomics or pharmacokinetics/pharmacodynamics. |
| popPK | Govindan_2022 | irrelevant | 0 | 0 | The study focuses on the efficacy and safety of arteether and garlic in mice, not the pharmacokinetics of artemotil. |
| PGx | Govindan_2022 | not_relevant | 0 | 0 | The paper evaluates the efficacy and safety of an artemotil (arteether) and garlic combination in a mouse model of malaria in pregnancy, but does not report any pharmacogenomic effects (gene variants) on PK or PD parameters. |
| popPK | Grace_1998 | irrelevant | 0 | 0 | The paper studies the metabolism of beta-arteether (not artemotil) and is in vitro only. |
| PGx | Grace_1998 | not_relevant | 0 | 0 | The paper describes the in vitro metabolism of beta-arteether by CYP isozymes and drug-drug inhibition, but does not report any pharmacogenomic effect of a specific gene variant on a pharmacokinetic or pharmacodynamic parameter. |
| popPK | Haq_2009 | irrelevant | 0 | 0 | The paper is a case report regarding the neurotoxic adverse effect (mania) of arteether, not a pharmacokinetic study, and contains no quantitative PK parameters. |
| PGx | Haq_2009 | not_relevant | 0 | 0 | The paper is a case report of an adverse event (mania) and does not report quantitative pharmacokinetic or pharmacodynamic parameters influenced by a specific genotype. |
| popPK | Li_1998 | irrelevant | 0 | 0 | The study focuses on dihydroartemisinin and related artemisinin derivatives, but does not mention or provide data for artemotil. |
| PGx | Li_1998 | not_relevant | 0 | 0 | This study investigates standard pharmacokinetics and bioavailability of artemisinins in rats and does not report any pharmacogenomic effects or gene variant interactions. |
| popPK | Li_2002 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics and neurotoxicity of beta-arteether and its metabolite, not artemotil. |
| PGx | Li_2002 | not_relevant | 0 | 0 | The paper studies the effect of formulation (vehicle) on PK and toxicity in rodents, not a gene variant or genotype. |
| PGx | Li_2004 | not_relevant | 0 | 0 | The paper reports pharmacokinetic parameters for artemotil but does not investigate the influence of any gene variant, genotype, or phenotype on these parameters. |
| popPK | Ooko_2015 | irrelevant | 0 | 0 | This is an in-vitro mechanistic study on ferroptosis and gene expression, not a pharmacokinetic study, and it does not involve artemotil (a distinct drug). |
| PGx | Ooko_2015 | not_relevant | 0 | 0 | The study investigates the mechanism of action (ferroptosis) and correlates iron gene expression with cytotoxicity in cancer cell lines, not human pharmacogenomic effects on PK/PD parameters. |
| popPK | Sabarinath_2005 | irrelevant | 0 | 0 | The study reports pharmacokinetic parameters for arteether (a prodrug/metabolite of artemether), not for artemotil. |
| PGx | Sabarinath_2005 | not_relevant | 0 | 0 | The paper describes the pharmacokinetics of arteether diastereomers in healthy volunteers but does not investigate gene variants, genotypes, or phenotypes (pharmacogenomics). |
| popPK | Smith_1997 | irrelevant | 0 | 0 | The paper is an in-vitro neurotoxicity study examining the mechanism of action (binding and cellular effects) of artemisinin derivatives, not a pharmacokinetic study reporting disposition parameters for artemotil. |
| PGx | Smith_1997 | not_relevant | 0 | 0 | The study investigates the enhancement of neurotoxicity by haemin in vitro, not a pharmacogenomic effect on a PK or PD parameter of artemotil. |
| popPK | Tripathi_2010 | irrelevant | 0 | 0 | The paper focuses on the antimalarial efficacy of α/β arteether formulations in mice, not the pharmacokinetics of artemotil. |
| PGx | Tripathi_2010 | not_relevant | 0 | 0 | The paper evaluates formulations of alpha/beta arteether in mice and does not investigate pharmacogenomic effects on pharmacokinetic or pharmacodynamic parameters for artemotil. |
| popPK | Tripathi_2013 | irrelevant | 0 | 0 | The study focuses on artemisinin derivatives (arteether) and ketoconazole in mice, not artemotil, and contains no PK parameter values for artemotil. |
| PGx | Tripathi_2013 | not_relevant | 0 | 0 | The study investigates a pharmacokinetic interaction between ketoconazole and artemisinin, but does not examine any genetic variants, genotypes, or pharmacogenomic effects. |
| popPK | Valecha_1997 | irrelevant | 0 | 0 | The study is a clinical efficacy trial for alpha,beta-arteether (not artemotil) and reports only clinical outcomes (fever/parasite clearance times) with no pharmacokinetic parameters. |
| PGx | Valecha_1997 | not_relevant | 0 | 0 | The paper reports a clinical efficacy trial for alpha,beta-arteether with no data on genetic variants or pharmacogenomics. |
| popPK | Van_2005 | irrelevant | 0 | 0 | The paper is a general review of artemisinin derivatives' use in malaria treatment and does not report quantitative pharmacokinetic parameters for artemotil. |
| PGx | Van_2005 | not_relevant | 0 | 0 | The paper is a general review of artemisinin derivatives' history, properties, and usage guidelines, with no report of pharmacogenomic effects on PK/PD parameters. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this page](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bartemotil%5D&body=Drug%3A%20artemotil%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_artemotil/%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · newest extraction 2026-11-23 19:09 UTC</sub>
