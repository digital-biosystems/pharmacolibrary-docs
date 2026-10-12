<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;C02K&quot;,&quot;href&quot;:&quot;atc/C02K.md&quot;},{&quot;label&quot;:&quot;ambrisentan&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Ambrisentan_Hill2020_reference&quot;,&quot;label&quot;:&quot;Hill_2020_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_ambrisentan/Ambrisentan_Hill2020_reference.md&quot;,&quot;status&quot;:&quot;extracted \u00b7 stale&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Ambrisentan_Okour2023_reference&quot;,&quot;label&quot;:&quot;Okour_2023_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_ambrisentan/Ambrisentan_Okour2023_reference.md&quot;,&quot;status&quot;:&quot;extracted \u00b7 stale&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

# ambrisentan

- **generic name:** ambrisentan
- **ATC codes:** `C02KX02`, `C02KX52`
- **DrugBank:** [DB06403](https://go.drugbank.com/drugs/DB06403) · **PubChem:** [CID 6918493](https://pubchem.ncbi.nlm.nih.gov/compound/6918493)
- **molar mass:** 378.428 g/mol (C22H22N2O4) — DrugBank
- **groups:** approved, investigational

## About

Ambrisentan is an antihypertensive drug used to treat pulmonary arterial hypertension. It is authorised in the European Union and is also used for related conditions such as portal and chronic pulmonary hypertension.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q410789](https://www.wikidata.org/wiki/Q410789) and the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## Molecular properties

> Molar masses support mass–molar conversion and metabolite stoichiometry. Sources: DrugBank (parent), reported values or identity-matched PubChem entries (metabolites).

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| ambrisentan | parent | 378.428 | C22H22N2O4 | DrugBank | [6918493](https://pubchem.ncbi.nlm.nih.gov/compound/6918493) | Hill_2020, Okour_2023 |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-06 15:01 | 6:56 | 2/0/0 | 0/0/0 | 0/0/0 | 109,711/20,546 | ollama / qwen3.8:27b-mtp-q8_0 | 5 | 1/4 | 5/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.25), gpt-oss:120b (partly confirmed, agreement 0.75). Primary extraction retained.">cross-check: disputed 0/2</span><br><sub>STALE — current validate: extracted</sub><br><sub>route_to: `engineer_replication`</sub> | [Hill_2020_reference](drugs/drug_ambrisentan/Ambrisentan_Hill2020_reference.md) | ▶ model + simulator | 1-compartment, IV | 2 | Hill KD et al., A Randomized, Controlled Pharmacokineti…, Pediatric critical care med… (2020) | [10.1097/PCC.0000000000002410](https://doi.org/10.1097/PCC.0000000000002410) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.882), gpt-oss:120b (not confirmed, agreement 0.882). Primary extraction retained.">cross-check: disputed 0/2</span><br><sub>caveat: Reference-individual predictions reproduce the source; covariate scenarios were not evaluated.</sub><br><sub>STALE — current validate: extracted</sub><br><sub>route_to: `engineer_replication`</sub> | [Okour_2023_reference](drugs/drug_ambrisentan/Ambrisentan_Okour2023_reference.md) | ▶ model + simulator | 2-compartment, oral | 6 (+1 cov.) | Okour M et al., Pediatric Population Pharmacokinetic Mo…, Journal of clinical pharmac… (2023) | [10.1002/jcph.2199](https://doi.org/10.1002/jcph.2199) |

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

## Coverage

- **PubMed hits:** 30 matched, 30 returned
- **screened:** 3  ·  **relevant:** 2
- **records:** 2  ·  extracted 2  ·  needs_review 0  ·  rejected 0  ·  stale 2
- **scholar-agent fallback query used:** not captured

## Full-text requests

_10 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Hill_2020.pdf` | Hill KD et al., A Randomized, Controlled Pharmacokineti…, Pediatric critical care med… (2020) | popPK | 10 | [10.1097/PCC.0000000000002410](https://doi.org/10.1097/PCC.0000000000002410) | [32639468](https://pubmed.ncbi.nlm.nih.gov/32639468) | The study reports a population PK model for ambrisentan with specific numeric values for clearance (1 L/hr/70 kg) and volume of distribution (13.7 L/70 kg) in the abstract. |
| `Angus_2017.pdf` | Angus JA et al., Distortion of K, Pharmacology research & per… (2017) | pd | 5 | [10.1002/prp2.374](https://doi.org/10.1002/prp2.374) | [29226623](https://www.ncbi.nlm.nih.gov/pubmed/29226623) | metadata signals extractable PD data (EC50) |
| `Markert_2013.pdf` | Markert C et al., Interaction of ambrisentan with clarith…, European journal of clinica… (2013) | pgx | 8 | [10.1007/s00228-013-1529-1](https://doi.org/10.1007/s00228-013-1529-1) | [23748747](https://www.ncbi.nlm.nih.gov/pubmed/23748747) | metadata signals extractable PGX data (SLCO1B1, PK/PD-context) |
| `Markert_2014.pdf` | Markert C et al., Lack of a clinically significant intera…, International journal of cl… (2014) | pgx | 8 | [10.5414/CP202164](https://doi.org/10.5414/CP202164) | [25207548](https://www.ncbi.nlm.nih.gov/pubmed/25207548) | metadata signals extractable PGX data (CYP2C19, PK/PD-context) |
| `Markert_2015.pdf` | Markert C et al., The effect of induction of CYP3A4 by St…, Basic & clinical pharmacolo… (2015) | pgx | 8 | [10.1111/bcpt.12332](https://doi.org/10.1111/bcpt.12332) | [25286744](https://www.ncbi.nlm.nih.gov/pubmed/25286744) | metadata signals extractable PGX data (CYP3A4, PK/PD-context) |
| `Harrison_2010.pdf` | Harrison B et al., Effects of rifampicin (rifampin) on the…, Clinical drug investigation (2010) | pgx | 7 | [10.2165/11539110-000000000-00000](https://doi.org/10.2165/11539110-000000000-00000) | [20923245](https://www.ncbi.nlm.nih.gov/pubmed/20923245) | metadata signals extractable PGX data (CYP3A4, PK/PD-context) |
| `Richards_2009.pdf` | Richards DB et al., Effect of ketoconazole on the pharmacok…, Journal of clinical pharmac… (2009) | pgx | 7 | [10.1177/0091270009335870](https://doi.org/10.1177/0091270009335870) | [19389876](https://www.ncbi.nlm.nih.gov/pubmed/19389876) | metadata signals extractable PGX data (CYP3A4, PK/PD-context) |
| `Spence_2010.pdf` | Spence R et al., Potential for pharmacokinetic interacti…, Clinical pharmacology and t… (2010) | pgx | 7 | [10.1038/clpt.2010.120](https://doi.org/10.1038/clpt.2010.120) | [20811346](https://www.ncbi.nlm.nih.gov/pubmed/20811346) | metadata signals extractable PGX data (CYP3A4, PK/PD-context) |
| `Venitz_2012.pdf` | Venitz J et al., Clinical pharmacokinetics and drug-drug…, Journal of clinical pharmac… (2012) | pgx | 7 | [10.1177/0091270011423662](https://doi.org/10.1177/0091270011423662) | [22205719](https://www.ncbi.nlm.nih.gov/pubmed/22205719) | metadata signals extractable PGX data (CYP3A, PK/PD-context) |
| `Weiss_2015.pdf` | Weiss J et al., Desmethyl bosentan displays a similar i…, Pulmonary pharmacology & th… (2015) | pgx | 7 | [10.1016/j.pupt.2014.12.001](https://doi.org/10.1016/j.pupt.2014.12.001) | [25535031](https://www.ncbi.nlm.nih.gov/pubmed/25535031) | metadata signals extractable PGX data (CYP3A4, PK/PD-context) |

<sub>queue written 2026-10-06T14:55:03.508595+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Angus_2017 | irrelevant | 0 | 0 | no_text gate: only 15 chars of text extracted (&lt; 400) |
| PD | Angus_2017 | not_relevant | 0 | 0 | The provided text is a fragment ("Distortion of K") and contains no information regarding ambrisentan, pharmacodynamics, or exposure-response relationships. |
| PGx | Gatfield_2014 | not_relevant | 0 | 0 | The paper investigates the molecular binding mode of macitentan versus ambrisentan using site-directed mutagenesis of the receptor, not the effect of human gene variants on ambrisentan's pharmacokinetics or pharmacodynamics. |
| PGx | Harrison_2010 | not_relevant | 0 | 0 | The study investigates a drug-drug interaction (rifampicin) rather than a pharmacogenomic effect (gene variant/genotype). |
| popPK | Kenna_2015 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic assessment of liver injury mechanisms (BSEP inhibition, mitochondrial respiration, covalent binding) and does not report quantitative pharmacokinetic disposition parameters (CL, V, t1/2) for ambrisentan. |
| PD | Kenna_2015 | not_relevant | 0 | 0 | The paper reports in vitro toxicity assays (IC50/EC50 for BSEP, MRP2, etc.) and exposure-adjusted ratios for safety assessment, not a pharmacodynamic exposure-response or dose-response relationship for the drug's therapeutic effect. |
| PGx | Lattanzio_2022 | not_relevant | 2 | 1 | The paper reports a pharmacogenomic effect on the hepatotoxicity of macitentan and selexipag, not on the PK or PD parameters of ambrisentan. |
| PGx | Markert_2013 | not_relevant | 2 | 10 | The study explicitly concludes that there was no contribution of the SLCO1B1*15 variant to the drug interaction, meaning no pharmacogenomic effect on PK parameters was reported. |
| PGx | Markert_2014 | not_relevant | 0 | 0 | The study investigates a drug-drug interaction (grapefruit juice) rather than a pharmacogenomic effect, and subjects were restricted to extensive metabolizers. |
| PD | Okour_2023 | not_relevant | 2 | 0 | The paper reports a population PK model and exploratory exposure-response analyses, but explicitly states there was no apparent association between exposure and efficacy (6MWD) or safety, and provides no numeric PD parameters (Emax, EC50, etc.). |
| PGx | Richards_2009 | not_relevant | 0 | 0 | The study investigates the effect of a drug-drug interaction (ketoconazole) on ambrisentan PK, not a pharmacogenomic effect based on gene variants or genotypes. |
| PGx | Saiz-Rodríguez_2020 | not_relevant | 2 | 10 | The study reports no significant association between CYP3A4/5 genotypes and ambrisentan PK parameters (all p-values &gt; 0.05). |
| PGx | Spence_2010 | not_relevant | 0 | 0 | The paper reports a drug-drug interaction (ambrisentan and cyclosporine), not a pharmacogenomic effect based on gene variants or genotypes. |
| PGx | Venitz_2012 | not_relevant | 0 | 0 | The paper reviews drug-drug interactions and general metabolism pathways but does not report pharmacogenomic effects of specific gene variants on ambrisentan PK/PD. |
| PGx | Weiss_2011 | not_relevant | 0 | 0 | The paper investigates the in vitro induction of drug-metabolizing enzymes by ambrisentan, not the effect of a patient's genetic variant on ambrisentan's PK or PD. |
| PGx | Weiss_2015 | not_relevant | 0 | 0 | The paper investigates in vitro drug-drug interaction potentials of metabolites, not pharmacogenomic effects of gene variants on PK/PD parameters. |
| PGx | Wu_2022 | not_relevant | 0 | 0 | The paper is a review of drug-drug interactions and does not report pharmacogenomic effects (gene variants) on ambrisentan PK/PD. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-06 14:55 UTC</sub>
