<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;V03A&quot;,&quot;href&quot;:&quot;atc/V03A.md&quot;},{&quot;label&quot;:&quot;deferiprone&quot;}]"></div>

# deferiprone

- **generic name:** deferiprone
- **ATC codes:** `V03AC02`
- **DrugBank:** [DB08826](https://go.drugbank.com/drugs/DB08826) · **PubChem:** [CID 2972](https://pubchem.ncbi.nlm.nih.gov/compound/2972)
- **molar mass:** 139.1519 g/mol (C7H9NO2) — DrugBank
- **groups:** approved, investigational

## About

Deferiprone is an iron chelating agent used to treat thalassemia and other conditions that cause iron overload. It is given orally in forms such as tablets, capsules, and syrups. It is authorised for use in the European Union and was also approved in the United States.

<small>Summary written by `qwen3.8-27b` from [Wikidata Q749664](https://www.wikidata.org/wiki/Q749664), [Wikipedia](https://en.wikipedia.org/wiki/Deferiprone?oldid=1381393060) (CC BY-SA 4.0), DrugBank's routes and dosage forms, the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## Molecular properties

> Molar masses support mass–molar conversion and metabolite stoichiometry. Sources: DrugBank (parent), reported values or identity-matched PubChem entries (metabolites).

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| deferiprone | parent | 139.152 | C7H9NO2 | DrugBank | [2972](https://pubchem.ncbi.nlm.nih.gov/compound/2972) | Abbas_2012, Bellanti_2014, Bellanti_2016, Bellanti_2017 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-rf" hidden data-species="human" data-age="adult" data-status="Rejected" data-sim="no"></span><span class="pk-badge pk-badge--red">Rejected</span><br><sub>blocking: no distribution volume and no clearance/elimination — not a compartmental popPK…</sub> | [Abbas_2012_reference](drugs/drug_deferiprone/Deferiprone_Abbas2012_reference.md) | — | 1-compartment (no model) | 2 | Abbas M et al., Quantitative determination of deferipro…, Pakistan journal of pharmac… (2012) | — |
| <span class="pk-rf" hidden data-species="human" data-age="adult" data-status="Rejected" data-sim="no"></span><span class="pk-badge pk-badge--red">Rejected</span><br><sub>blocking: C5 dimension mismatch on a structural parameter — unit dimension conflicts with…</sub> | [Bellanti_2014_reference](drugs/drug_deferiprone/Deferiprone_Bellanti2014_reference.md) | — | 1-compartment (no model) | 3 | Bellanti F et al., Population pharmacokinetics of deferipr…, British journal of clinical… (2014) | [10.1111/bcp.12473](https://doi.org/10.1111/bcp.12473) |
| <span class="pk-rf" hidden data-species="human" data-age="paediatric" data-status="Rejected" data-sim="no"></span><span class="pk-badge pk-badge--red">Rejected</span><br><sub>blocking: no distribution volume and no clearance/elimination — not a compartmental popPK…</sub> | [Bellanti_2016_reference](drugs/drug_deferiprone/Deferiprone_Bellanti2016_reference.md) | — | 1-compartment (no model) | 2 | Bellanti F et al., Sampling Optimization in Pharmacokineti…, Journal of clinical pharmac… (2016) | [10.1002/jcph.708](https://doi.org/10.1002/jcph.708) |
| <span class="pk-rf" hidden data-species="human" data-age="paediatric" data-status="Rejected" data-sim="no"></span><span class="pk-badge pk-badge--red">Rejected</span><br><sub>blocking: no distribution volume and no clearance/elimination — not a compartmental popPK…</sub><br><sub>blocking: C5 dimension mismatch on a structural parameter — unit dimension conflicts with…</sub> | [Bellanti_2017_reference](drugs/drug_deferiprone/Deferiprone_Bellanti2017_reference.md) | — | 1-compartment (no model) | 1 | Bellanti F et al., Population pharmacokinetics and dosing…, British journal of clinical… (2017) | [10.1111/bcp.13134](https://doi.org/10.1111/bcp.13134) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--neutral">Not simulated</span> | [Borella_2022_FERRITIN](drugs/drug_deferiprone/pd_Borella_2022_FERRITIN.md) | serum ferritin ← deferiprone · indirect response — drug stimulates the loss of serum ferritin | — | Borella E et al., Characterisation of individual ferritin…, British journal of clinical… (2022) | [10.1111/bcp.15290](https://doi.org/10.1111/bcp.15290) |

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model is built and runs, and no check contradicts it, but no value the paper reported was compared with its simulation (none reported, or none extracted). Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-11-23 19:07 | 0:04 | 0/4/0 | 1/0/0 | 0/0/0 | 4,011/185 | einfracz / qwen3.8-27b | 1 | 0/1 | 1/0 | 0 |

## Coverage

- **PubMed hits:** 12 matched, 12 returned
- **screened:** 5  ·  **relevant:** 3
- **records:** 4  ·  extracted 0  ·  needs review 0  ·  rejected 4  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| PGx | Abbas_2012 | not_relevant | 0 | 0 | The paper reports standard pharmacokinetic parameters for deferiprone but does not investigate the influence of any gene variants or genotypes. |
| popPK | Bellanti_2014 | relevant | 10 | 3 | The paper describes a population PK study of deferiprone in humans, but specific parameter values (CL, V, Q, ka) are not listed in the provided text, only exposure metrics like AUC and Cmax. |
| PGx | Bellanti_2014 | not_relevant | 0 | 0 | The study assesses demographic (gender, age, weight) and physiological (CLcr) covariates, not genetic variants or phenotypes. |
| PGx | Bellanti_2016 | not_relevant | 0 | 0 | The paper focuses on optimizing sampling designs for a pharmacokinetic bridging study in children and does not investigate the impact of genetic variants or genotypes on deferiprone PK or PD parameters. |
| PGx | Bellanti_2017 | not_relevant | 0 | 0 | The paper focuses on developmental pharmacokinetics in children (body weight/age) and does not report any pharmacogenomic effects on deferiprone PK parameters. |
| popPK | Borella_2022 | irrelevant | 3 | 2 | This is a drug–disease (ferritin/iron) PD model; deferiprone PK is only cited from prior literature (Bellanti) and no deferiprone CL/V/ka values are reported here. |
| popPK | Calvaruso_2014 | irrelevant | 0 | 0 | The paper is a clinical trial comparing efficacy and safety (serum ferritin reduction) of deferiprone vs deferoxamine, with no pharmacokinetic parameters reported. |
| PGx | Calvaruso_2014 | not_relevant | 0 | 0 | The paper compares two drugs in sickle cell disease and does not report any pharmacogenomic analysis or gene-variant effects on pharmacokinetic or pharmacodynamic parameters. |
| popPK | Cen_2024 | irrelevant | 0 | 0 | The study focuses on the synthesis and efficacy of new hydroxypyridinone compounds for acute kidney injury, using deferiprone only as a comparator without reporting any pharmacokinetic parameters for deferiprone. |
| PGx | Cen_2024 | not_relevant | 0 | 0 | The paper discusses the synthesis and efficacy of new hydroxypyridinones in animal models and compares them to deferiprone, but it does not report pharmacogenomic effects (gene variants) on the PK or PD of deferiprone. |
| popPK | Fischer_2003 | irrelevant | 1 | 0 | The paper reports on liver iron concentrations and chelation efficacy, not the pharmacokinetic parameters (CL, V, ka, etc.) of deferiprone. |
| PGx | Fischer_2003 | not_relevant | 0 | 0 | The paper describes the efficacy of iron chelation therapy and iron overload dynamics but contains no data on gene variants, genotypes, or pharmacogenomic effects on PK/PD parameters. |
| popPK | Morales_2009 | irrelevant | 2 | 0 | The study reports only summary bioequivalence parameters (Cmax, AUC) and ratios, lacking specific quantitative disposition parameters (CL, V, ka) or a compartmental/population-PK model. |
| PGx | Morales_2009 | not_relevant | 0 | 0 | The paper is a bioequivalence study comparing two formulations in healthy volunteers and does not report any pharmacogenomic effects or genetic variants. |
| popPK | Wada_2014 | irrelevant | 0 | 0 | This is an in-vitro study measuring iron-chelating efficacy (EC50), not pharmacokinetic disposition parameters (CL, V, t1/2). |
| PGx | Wada_2014 | not_relevant | 0 | 0 | The paper describes an in vitro chelating assay for deferiprone and other compounds, but does not report any pharmacogenomic effects on pharmacokinetic or pharmacodynamic parameters in vivo or in vivo. |
| popPK | Zhang_2024 | irrelevant | 0 | 0 | The paper focuses on the development of novel ferroptosis inhibitors (compound 9c) in an in-vitro cell model, mentioning deferiprone only as a clinically used comparator with limited efficacy, and does not report any pharmacokinetic parameters for deferiprone. |
| PGx | Zhang_2024 | not_relevant | 0 | 0 | The paper describes novel chemical compounds for ferroptosis inhibition and does not report any pharmacogenomic effects on the pharmacokinetics or pharmacodynamics of deferiprone. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this page](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bdeferiprone%5D&body=Drug%3A%20deferiprone%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_deferiprone/%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · newest extraction 2026-11-23 19:05 UTC</sub>
