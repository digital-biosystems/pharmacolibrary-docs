<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;P01C&quot;,&quot;href&quot;:&quot;atc/P01C.md&quot;},{&quot;label&quot;:&quot;sodium stibogluconate&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;SodiumStibogluconate_Jaser1995_reference&quot;,&quot;label&quot;:&quot;Jaser_1995_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_sodium_stibogluconate/SodiumStibogluconate_Jaser1995_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;SodiumStibogluconate_Verrest2021_reference&quot;,&quot;label&quot;:&quot;Verrest_2021_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_sodium_stibogluconate/SodiumStibogluconate_Verrest2021_reference.md&quot;,&quot;status&quot;:&quot;Rejected&quot;,&quot;css&quot;:&quot;pk-badge--red&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;pd_Verrest_2024_parasite_load&quot;,&quot;label&quot;:&quot;Verrest_2024 \u00b7 parasite load&quot;,&quot;group&quot;:&quot;PD&quot;,&quot;href&quot;:&quot;drugs/drug_sodium_stibogluconate/pd_Verrest_2024_parasite_load.md&quot;,&quot;status&quot;:&quot;Simulated&quot;,&quot;css&quot;:&quot;pk-badge--blue&quot;,&quot;here&quot;:false}]"></div>

# sodium stibogluconate

- **generic name:** sodium stibogluconate
- **ATC codes:** `P01CB02`
- **DrugBank:** [DB05630](https://go.drugbank.com/drugs/DB05630) · **PubChem:** [CID 56927674](https://pubchem.ncbi.nlm.nih.gov/compound/56927674)
- **molar mass:** 907.88 g/mol (C12H35Na3O26Sb2) — DrugBank
- **groups:** approved, investigational

## About

Sodium stibogluconate is a pentavalent antimonial medication used to treat leishmaniasis. It is administered via intramuscular injection.

<small>Summary written by `qwen3.8-27b` from [Wikidata Q2757844](https://www.wikidata.org/wiki/Q2757844), [Wikipedia](https://en.wikipedia.org/wiki/Sodium_stibogluconate?oldid=1363161171) (CC BY-SA 4.0), DrugBank's routes and dosage forms and the WHO ATC classification; not checked by a person.</small>

## Molecular properties

> Molar masses support mass–molar conversion and metabolite stoichiometry. Sources: DrugBank (parent), reported values or identity-matched PubChem entries (metabolites).

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| sodium_stibogluconate | metabolite | 907.88 | C12H35Na3O26Sb2 | DrugBank | [56927674](https://pubchem.ncbi.nlm.nih.gov/compound/56927674) | Chulay_1988, Jaser_1995, Zaghloul_2010 |

## Start here

> **Jaser_1995_reference** — <span class="pk-badge pk-badge--orange">Needs review</span> patients with cutaneous leishmaniasis. [Run it in the simulator](drugs/drug_sodium_stibogluconate/SodiumStibogluconate_Jaser1995_reference.md?tab=Simulation) · [record](drugs/drug_sodium_stibogluconate/SodiumStibogluconate_Jaser1995_reference.md)

<sub>Chosen automatically: the best-status record that runs in the browser, preferring a healthy, human population and values taken from the paper.</sub>

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-rf" hidden data-species="human" data-age="adult" data-status="Needs review" data-sim="yes"></span><span class="pk-badge pk-badge--orange">Needs review</span><br><sub>caveat: Reference-individual predictions reproduce the source; covariate scenarios were not evaluated.</sub><br><sub>blocking: cross_check_disputed</sub> | [Jaser_1995_reference](drugs/drug_sodium_stibogluconate/SodiumStibogluconate_Jaser1995_reference.md) | ▶ model + simulator | 1-compartment, IV | 4 | Jaser MA et al., Pharmacokinetics of antimony in patient…, Pharmaceutical research (1995) | [10.1023/a:1016251023427](https://doi.org/10.1023/a:1016251023427) |
| <span class="pk-rf" hidden data-species="human" data-age="adult" data-status="Needs review" data-sim="no"></span><span class="pk-badge pk-badge--orange">Needs review</span><br><sub>blocking: disposition incomplete — only clearance/elimination extracted — the engineer ne…</sub> | [Zaghloul_2010_reference](drugs/drug_sodium_stibogluconate/SodiumStibogluconate_Zaghloul2010_reference.md) | — | 1-compartment (no model) | 3 | Zaghloul IY et al., Clinical efficacy and pharmacokinetics…, Journal of clinical pharmac… (2010) | [10.1177/0091270009347674](https://doi.org/10.1177/0091270009347674) |
| <span class="pk-rf" hidden data-species="human" data-age="adult" data-status="Rejected" data-sim="no"></span><span class="pk-badge pk-badge--red">Rejected</span><br><sub>blocking: C8 unreachable/orphan compartment or unlinked metabolite</sub> | [Chulay_1988_reference](drugs/drug_sodium_stibogluconate/SodiumStibogluconate_Chulay1988_reference.md) | — | general linear (no model) | 1 | Chulay JD et al., Pharmacokinetics of antimony during tre…, Transactions of the Royal S… (1988) | — |
| <span class="pk-rf" hidden data-species="human" data-age="unknown" data-status="Rejected" data-sim="yes"></span><span class="pk-badge pk-badge--red">Rejected</span><br><sub>blocking: paper_subject_is_other_drug</sub> | [Verrest_2021_reference](drugs/drug_sodium_stibogluconate/SodiumStibogluconate_Verrest2021_reference.md) | ▶ model + simulator | 1-compartment, oral | 3 | Verrest L et al., Geographical Variability in Paromomycin…, Clinical pharmacokinetics (2021) | [10.1007/s40262-021-01036-8](https://doi.org/10.1007/s40262-021-01036-8) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Mukhopadhyay_2011_sensitivity_towards_sodium_stibogluconate](drugs/drug_sodium_stibogluconate/pd_Mukhopadhyay_2011_sensitivity_towards_sodium_stibogluconate.md) | sensitivity towards sodium stibogluconate ← sodium stibogluconate · direct Emax (saturable) effect | — | Mukhopadhyay R et al., Characterisation of antimony-resistant…, International journal for p… (2011) | [10.1016/j.ijpara.2011.07.013](https://doi.org/10.1016/j.ijpara.2011.07.013) |
| <span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Seifert_2010_percentage_inhibition_of_infected_macrophages](drugs/drug_sodium_stibogluconate/pd_Seifert_2010_percentage_inhibition_of_infected_macrophages.md) | percentage inhibition of infected macrophages ← sodium_stibogluconate · direct sigmoid Emax (Hill) effect | — | Seifert K et al., In vitro activity of anti-leishmanial d…, The Journal of antimicrobia… (2010) | [10.1093/jac/dkp500](https://doi.org/10.1093/jac/dkp500) |
| <span class="pk-badge pk-badge--blue">Simulated</span> | [Verrest_2024_parasite_load](drugs/drug_sodium_stibogluconate/pd_Verrest_2024_parasite_load.md) | blood parasite load (Leishmania kDNA by qPCR) ← sodium stibogluconate · direct linear effect | ▶ model + simulator | Verrest L et al., Leishmania blood parasite dynamics duri…, PLoS neglected tropical dis… (2024) | [10.1371/journal.pntd.0012078](https://doi.org/10.1371/journal.pntd.0012078) |

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model is built and runs, and no check contradicts it, but no value the paper reported was compared with its simulation (none reported, or none extracted). Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-11-24 05:08 | 2:54 | 2/2/0 | 3/0/0 | 0/0/0 | 11,932/5,863 | einfracz / qwen3.8-27b | 4 | 0/4 | 4/0 | 0 |

## Coverage

- **PubMed hits:** 16 matched, 16 returned
- **screened:** 4  ·  **relevant:** 4
- **records:** 4  ·  extracted 0  ·  needs review 2  ·  rejected 2  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_1 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Zaghloul_2010.pdf` | Zaghloul IY et al., Clinical efficacy and pharmacokinetics…, Journal of clinical pharmac… (2010) | popPK | 10 | [10.1177/0091270009347674](https://doi.org/10.1177/0091270009347674) | [20663995](https://pubmed.ncbi.nlm.nih.gov/20663995) | The paper reports quantitative pharmacokinetic parameters (absorption half-life, elimination half-life, renal clearance) for sodium stibogluconate in humans, with values explicitly provided in the abstract. |

<sub>queue written 2026-11-24 05:05 UTC</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| PGx | Chulay_1988 | not_relevant | 0 | 0 | The paper reports population pharmacokinetics of sodium stibogluconate but contains no data on gene variants, genotypes, or pharmacogenomic effects. |
| popPK | Coelho_2014 | irrelevant | 3 | 3 | Study is about meglumine antimoniate (a different pentavalent antimonial) in rats; sodium stibogluconate is only mentioned as a related drug, and only half-lives (0.6 h, &gt;24 h) are given without CL/V or a full PK model. |
| popPK | Ghosh_2021 | irrelevant | 0 | 0 | In vitro drug-susceptibility (EC50) study of Leishmania isolates; no PK disposition parameters for sodium stibogluconate are reported. |
| PGx | Jaser_1995 | not_relevant | 0 | 0 | The paper reports general population pharmacokinetics and a bimodal AUC distribution but does not link these variations to specific gene variants, genotypes, or phenotypes. |
| popPK | Kiderlen_2001 | irrelevant | 0 | 0 | The paper is an in-vitro mechanism study measuring leishmanicidal EC50 values, not a pharmacokinetic study, and sodium stibogluconate is only used as a comparator. |
| PGx | Kiderlen_2001 | not_relevant | 0 | 0 | The paper investigates the pharmacological activity of polyphenols against Leishmania and does not report on pharmacogenomic effects or genetic variants on the PK/PD of sodium_stibogluconate. |
| popPK | Mehta_2010 | irrelevant | 0 | 0 | The study reports in-vitro efficacy (EC50) values for sodium stibogluconate, not pharmacokinetic disposition parameters. |
| PGx | Mehta_2010 | not_relevant | 0 | 0 | The paper reports in vitro drug screening results using flow cytometry and does not investigate any genetic variants or pharmacogenomic effects on sodium stibogluconate pharmacokinetics or pharmacodynamics. |
| popPK | Mukhopadhyay_2011 | irrelevant | 0 | 0 | The paper is an in-vitro mechanistic study characterizing drug resistance in Leishmania parasites, reporting EC50 values rather than pharmacokinetic parameters like clearance or volume of distribution. |
| PGx | Mukhopadhyay_2011 | not_relevant | 0 | 0 | The paper characterizes parasite resistance mechanisms to sodium stibogluconate but does not report pharmacogenomic effects of human gene variants on PK or PD parameters. |
| popPK | Seifert_2006 | irrelevant | 0 | 0 | The study focuses on in vitro/in vivo drug interactions and efficacy (FIC, AEI) rather than pharmacokinetic parameters like clearance or volume. |
| PGx | Seifert_2006 | not_relevant | 0 | 0 | The paper discusses drug-drug interactions and does not report any pharmacogenomic effects (gene variants) on PK or PD parameters. |
| popPK | Seifert_2010 | irrelevant | 0 | 0 | The paper reports in vitro pharmacodynamic activity (EC50 values) of the drug, not quantitative pharmacokinetic disposition parameters. |
| PGx | Seifert_2010 | not_relevant | 2 | 2 | The study assesses drug activity across different host cell types (macrophage populations) and does not report a human genetic variant or genotype influencing the pharmacokinetic or pharmacodynamic parameter. |
| popPK | Seifert_2011 | irrelevant | 0 | 0 | This is an in vitro pharmacodynamic study evaluating drug interactions against Leishmania, not a pharmacokinetic study, and contains no disposition parameters. |
| PGx | Seifert_2011 | not_relevant | 0 | 0 | The paper reports in vitro drug-drug interactions (pharmacodynamic combinations) in a cell model, not a pharmacogenomic effect of a gene variant on the PK or PD of sodium stibogluconate. |
| popPK | Ullman_1989 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of drug resistance in Leishmania, not a pharmacokinetic study of sodium stibogluconate in a subject organism. |
| PGx | Ullman_1989 | not_relevant | 0 | 0 | The paper studies antimony resistance in Leishmania parasites (drug target resistance) rather than human pharmacogenomic effects on drug pharmacokinetics or pharmacodynamics. |
| popPK | Verrest_2021 | irrelevant | 0 | 0 | This is a population-PK study of paromomycin; sodium stibogluconate is only a co-administered comparator drug with no PK parameters reported for it. |
| popPK | Verrest_2024 | irrelevant | 2 | 1 | This is a PK-PD model of Leishmania parasite dynamics; sodium stibogluconate is only one of several treatments, with no SSG disposition parameters estimated (only a literature half-life of 2 h used in a kinetic-pharmacodynamic assumption), and no numeric SSG PK values are present. |
| PGx | Zaghloul_2004 | not_relevant | 0 | 0 | The study investigates the effect of renal impairment (a physiological condition induced by toxin) on PK parameters, not the effect of a genetic variant or genotype (pharmacogenomics). |
| PGx | Zaghloul_2010 | not_relevant | 0 | 0 | The paper reports pharmacokinetics and efficacy in a general population but does not investigate any gene variants or pharmacogenomic effects. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this page](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bsodium_stibogluconate%5D&body=Drug%3A%20sodium_stibogluconate%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_sodium_stibogluconate/%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · newest extraction 2026-11-24 05:05 UTC</sub>
