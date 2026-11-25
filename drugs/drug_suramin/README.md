<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;P01C&quot;,&quot;href&quot;:&quot;atc/P01C.md&quot;},{&quot;label&quot;:&quot;Suramin&quot;}]"></div>

# Suramin

- **generic name:** Suramin
- **ATC codes:** `P01CX02`
- **DrugBank:** [DB04786](https://go.drugbank.com/drugs/DB04786) · **PubChem:** none
- **groups:** investigational

## About

Suramin is an antiparasitic drug used against trypanosomiasis and leishmaniasis. The drug is currently under investigation.

<small>⚠️ **Unverified** — written by `qwen3.8-27b` from general knowledge (no Wikidata entry found) and the WHO ATC classification; not checked by a person.</small>

## Molecular properties

> Molar masses support mass–molar conversion and metabolite stoichiometry. Sources: DrugBank (parent), reported values or identity-matched PubChem entries (metabolites).

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| suramin | parent | 1297.26 | C51H40N6O23S6 | PubChem | [5361](https://pubchem.ncbi.nlm.nih.gov/compound/5361) | Kosarek_2006, Naviaux_2017, Scher_1992 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-rf" hidden data-species="dog" data-age="unknown" data-status="Needs review" data-sim="no"></span><span class="pk-badge pk-badge--orange">Needs review</span> <span class="pk-badge pk-badge--species" title="Animal study (dog), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">dog</span><br><sub>blocking: disposition incomplete — only clearance/elimination extracted — the engineer ne…</sub> | [Kosarek_2006_reference](drugs/drug_suramin/Suramin_Kosarek2006_reference.md) | — | 1-compartment (no model) | 2 | Kosarek CE et al., Phase I evaluation of low-dose suramin…, Journal of veterinary inter… (2006) | [10.1892/0891-6640(2006)20[1172:pieols]2.0.co;2](https://doi.org/10.1892/0891-6640(2006)20[1172:pieols]2.0.co;2) |
| <span class="pk-rf" hidden data-species="human" data-age="paediatric" data-status="Rejected" data-sim="no"></span><span class="pk-badge pk-badge--red">Rejected</span><br><sub>blocking: missing key parameters — none reported by this paper</sub> | [Naviaux_2017_reference](drugs/drug_suramin/Suramin_Naviaux2017_reference.md) | — | 1-compartment (no model) | 0 | Naviaux RK et al., Low-dose suramin in autism spectrum dis…, Annals of clinical and tran… (2017) | [10.1002/acn3.424](https://doi.org/10.1002/acn3.424) |
| <span class="pk-rf" hidden data-species="human" data-age="adult" data-status="Rejected" data-sim="no"></span><span class="pk-badge pk-badge--red">Rejected</span><br><sub>blocking: missing key parameters — none reported by this paper</sub> | [Scher_1992_reference](drugs/drug_suramin/Suramin_Scher1992_reference.md) | — | 1-compartment (no model) | 0 | Scher HI et al., Use of adaptive control with feedback t…, Cancer research (1992) | — |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--species" title="The paper reports both human and animal data (from the LLM relevance screen, p(non-human) 0.50).">human + animal</span> | [Atkins_2020_BPLF1_DUB_activity](drugs/drug_suramin/pd_Atkins_2020_BPLF1_DUB_activity.md) | BPLF1 DUB activity ← suramin · direct sigmoid Emax (Hill) effect | — | Atkins SL et al., Small molecule screening identifies inh…, Antiviral research (2020) | [10.1016/j.antiviral.2019.104649](https://doi.org/10.1016/j.antiviral.2019.104649) |
| <span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Cafferati_2025_CRAT_activity](drugs/drug_suramin/pd_Cafferati_2025_CRAT_activity.md) | CRAT activity ← suramin · direct sigmoid Emax (Hill) effect | — | Cafferati Beltrame L et al., Combined in silico/in vitro approaches…, Acta pharmacologica Sinica (2025) | [10.1038/s41401-024-01435-0](https://doi.org/10.1038/s41401-024-01435-0) |
| <span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Cafferati_2025_CRAT_activity_2](drugs/drug_suramin/pd_Cafferati_2025_CRAT_activity_2.md) | CRAT activity ← suramin · direct sigmoid Emax (Hill) effect | — | Cafferati Beltrame L et al., Combined in silico/in vitro approaches…, Acta pharmacologica Sinica (2025) | [10.1038/s41401-024-01435-0](https://doi.org/10.1038/s41401-024-01435-0) |
| <span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--species" title="The paper reports both human and animal data (from an LLM reading of the title and abstract by glm-5.3-flash, p(non-human) 0.50).">human + animal</span> | [Gan_2015_TRT](drugs/drug_suramin/pd_Gan_2015_TRT.md) | telomerase activity ← suramin · direct Emax (saturable) effect | — | Gan Y et al., Pharmacodynamics of telomerase inhibiti…, The AAPS journal (2015) | [10.1208/s12248-014-9703-7](https://doi.org/10.1208/s12248-014-9703-7) |
| <span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Ho_2015_EC50](drugs/drug_suramin/pd_Ho_2015_EC50.md) | CHIKV infection (microneutralization assay, OD570) ← suramin · direct sigmoid Emax (Hill) effect | — | Ho YJ et al., Suramin Inhibits Chikungunya Virus Entr…, PloS one (2015) | [10.1371/journal.pone.0133511](https://doi.org/10.1371/journal.pone.0133511) |
| <span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--species" title="Animal study (mouse), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">mouse</span> | [Poletto_2008_I_Cl_swell](drugs/drug_suramin/pd_Poletto_2008_I_Cl_swell.md) | I(Cl,swell) ← Suramin · target-mediated drug disposition | — | Poletto Chaves LA et al., Volume-activated chloride channels in m…, Pflugers Archiv : European… (2008) | [10.1007/s00424-008-0525-2](https://doi.org/10.1007/s00424-008-0525-2) |
| <span class="pk-badge pk-badge--blue">Simulated</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from an LLM reading of the title and abstract by glm-5.3-flash, p(non-human) 1.00).">in vitro</span> | [Tan_2012_Ago2_miR_21_binding_inhibition](drugs/drug_suramin/pd_Tan_2012_Ago2_miR_21_binding_inhibition.md) | Ago2:miR-21 binding inhibition biomarker turnover ← suramin | — | Tan GS et al., Small molecule inhibition of RISC loadi…, ACS chemical biology (2012) | [10.1021/cb200253h](https://doi.org/10.1021/cb200253h) |

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model is built and runs, and no check contradicts it, but no value the paper reported was compared with its simulation (none reported, or none extracted). Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-11-24 07:01 | 0:07 | 1/2/0 | 7/0/0 | 0/0/0 | 4,269/165 | einfracz / qwen3.8-27b | 15 | 13/2 | 12/3 | 0 |

## Coverage

- **PubMed hits:** 672 matched, 71 returned
- **screened:** 3  ·  **relevant:** 3
- **records:** 3  ·  extracted 0  ·  needs review 1  ·  rejected 2  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_10 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Barajas-López_1993.pdf` | Barajas-López C et al., Suramin increases the efficacy of ATP t…, European journal of pharmac… (1993) | pd | 4 | [10.1016/0014-2999(93)90631-q](https://doi.org/10.1016/0014-2999(93)90631-q) | [8119311](https://www.ncbi.nlm.nih.gov/pubmed/8119311) | metadata signals extractable PD data (EC50) |
| `Evans_1995.pdf` | Evans RJ et al., Pharmacological characterization of het…, Molecular pharmacology (1995) | pd | 4 |  | [7544432](https://www.ncbi.nlm.nih.gov/pubmed/7544432) | metadata signals extractable PD data (EC50) |
| `Kumar_1987.pdf` | Kumar S, The response of adult and free-living s…, Revista de biologia tropical (1987) | pd | 4 |  | [3444926](https://www.ncbi.nlm.nih.gov/pubmed/3444926) | metadata signals extractable PD data (EC50) |
| `Mallard_1992.pdf` | Mallard N et al., Suramin: a selective inhibitor of purin…, European journal of pharmac… (1992) | pd | 4 | [10.1016/0014-2999(92)90004-n](https://doi.org/10.1016/0014-2999(92)90004-n) | [1330614](https://www.ncbi.nlm.nih.gov/pubmed/1330614) | metadata signals extractable PD data (EC50) |
| `Townsend-Nicholson_1999.pdf` | Townsend-Nicholson A et al., Molecular cloning, functional character…, Brain research. Molecular b… (1999) | pd | 4 | [10.1016/s0169-328x(98)00328-3](https://doi.org/10.1016/s0169-328x(98)00328-3) | [9931497](https://www.ncbi.nlm.nih.gov/pubmed/9931497) | metadata signals extractable PD data (EC50) |
| `Volsky_1992.pdf` | Volsky DJ et al., Evaluation of multiple parameters of HI…, Antiviral research (1992) | pd | 4 | [10.1016/0166-3542(92)90028-4](https://doi.org/10.1016/0166-3542(92)90028-4) | [1322647](https://www.ncbi.nlm.nih.gov/pubmed/1322647) | metadata signals extractable PD data (EC50) |
| `Wang_2014.pdf` | Wang Y et al., Suramin inhibits EV71 infection, Antiviral research (2014) | pd | 4 | [10.1016/j.antiviral.2013.12.008](https://doi.org/10.1016/j.antiviral.2013.12.008) | [24374150](https://www.ncbi.nlm.nih.gov/pubmed/24374150) | metadata signals extractable PD data (IC50) |
| `Zhong_2000.pdf` | Zhong Y et al., Pharmacological comparison of P2X recep…, Neuropharmacology (2000) | pd | 4 | [10.1016/s0028-3908(99)00145-8](https://doi.org/10.1016/s0028-3908(99)00145-8) | [10670412](https://www.ncbi.nlm.nih.gov/pubmed/10670412) | metadata signals extractable PD data (EC50) |
| `von_1995.pdf` | von Kügelgen I et al., Vasoconstrictor responses to the P2x-pu…, British journal of pharmaco… (1995) | pd | 4 | [10.1111/j.1476-5381.1995.tb16685.x](https://doi.org/10.1111/j.1476-5381.1995.tb16685.x) | [8528582](https://www.ncbi.nlm.nih.gov/pubmed/8528582) | metadata signals extractable PD data (EC50) |
| `Hutson_1998.pdf` | Hutson PR et al., Renal clearance, tissue distribution, a…, Clinical cancer research :… (1998) | pgx | 7 |  | [9626459](https://www.ncbi.nlm.nih.gov/pubmed/9626459) | metadata signals extractable PGX data (CYP1A2, PK/PD-context) |

<sub>queue written 2026-11-24 07:01 UTC</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Allgaier_1995 | irrelevant | 0 | 0 | The study is an in vitro pharmacological investigation of ATP-induced noradrenaline release where suramin is used only as a P2-purinoceptor antagonist, with no pharmacokinetic parameters reported. |
| PGx | Allgaier_1995 | not_relevant | 0 | 0 | The paper describes suramin's pharmacological activity in a cell culture assay and does not report any gene variants or genotypes affecting its PK or PD. |
| popPK | Alsford_2013 | irrelevant | 0 | 0 | The paper is a mechanistic review of drug uptake via endocytosis in trypanosomes, containing no quantitative pharmacokinetic parameters for suramin. |
| PGx | Alsford_2013 | not_relevant | 0 | 0 | The paper discusses receptor-mediated endocytosis for suramin uptake in trypanosomes but does not report pharmacogenomic effects (gene variants altering PK/PD) in humans. |
| popPK | Atkins_2020 | irrelevant | 0 | 0 | The paper is a virology study screening inhibitors of the EBV enzyme BPLF1, using suramin as a test compound rather than studying its pharmacokinetics. |
| PGx | Atkins_2020 | not_relevant | 0 | 0 | The paper describes the discovery and antiviral mechanism of suramin as a BPLF1 inhibitor, but reports no pharmacogenomic effects on its pharmacokinetics or pharmacodynamics. |
| popPK | Bailly_2016 | irrelevant | 0 | 0 | The study is an in-vitro pharmacodynamic/structural biology investigation of suramin as an antiviral agent (inhibitor of hPIV-3 HN), with no pharmacokinetic parameters reported. |
| PGx | Bailly_2016 | not_relevant | 0 | 0 | The paper describes the antiviral mechanism and synergy of suramin in vitro, with no data on pharmacogenomics or human PK/PD parameters. |
| popPK | Bapiro_2002 | irrelevant | 0 | 0 | The paper investigates CYP1A1/2 induction by antiparasitic drugs and reports that suramin has no effect on CYP1A, containing no pharmacokinetic parameters (CL, V, t1/2) for suramin. |
| PGx | Bapiro_2002 | not_relevant | 0 | 0 | The paper reports no effect of the antiparasitic drugs, including suramin, on CYP1A induction, and it does not report pharmacogenomic differences (gene variants) altering the PK/PD of suramin. |
| popPK | Barajas-López_1993 | irrelevant | 0 | 0 | The paper is an electrophysiology study on purinoceptors in guinea-pig ileum neurons, not a pharmacokinetic study, and reports no disposition parameters. |
| PGx | Barajas-López_1993 | not_relevant | 0 | 0 | The study investigates the pharmacodynamic interaction between suramin and ATP on ion currents, but does not involve any genetic variants or genotypes. |
| popPK | Barajas-López_1995 | irrelevant | 0 | 0 | The study investigates the neuromodulatory effects of ATP and suramin on acetylcholine release in guinea pig submucosal neurons; suramin is used only as an antagonist to characterize receptor type, not as the subject of a pharmacokinetic analysis. |
| PGx | Barajas-López_1995 | not_relevant | 0 | 0 | The paper investigates the neurophysiological mechanisms of ATP and mentions suramin as an antagonist in a single experimental context, but it does not report any pharmacogenomic effects (gene variants changing PK/PD) on suramin. |
| popPK | Bouteille_1995 | irrelevant | 0 | 0 | The study focuses on the efficacy of megazol in mice, with suramin used only as a comparator drug in combination therapy, and no pharmacokinetic parameters for suramin are reported. |
| PGx | Bouteille_1995 | not_relevant | 0 | 0 | The paper describes a preclinical study on a new drug (megazol) and its combination with suramin in mice, containing no human pharmacogenomic data or genetic variants affecting suramin's PK/PD. |
| popPK | Cafferati_2025 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of CRAT enzyme inhibition by suramin, reporting no pharmacokinetic disposition parameters for the drug itself. |
| PGx | Cafferati_2025 | not_relevant | 0 | 0 | The paper investigates CRAT enzyme variants and drug modulators, but does not report pharmacokinetic or pharmacodynamic effects of suramin modulated by gene variants. |
| popPK | Chaudhry_1996 | irrelevant | 2 | 0 | The study focuses on neurological toxicity rather than pharmacokinetics, and while a PK model is mentioned for dosing, no quantitative PK parameters (CL, V, etc.) are reported. |
| PGx | Chaudhry_1996 | not_relevant | 0 | 0 | The study reports the incidence and severity of suramin-induced peripheral neuropathy correlated with dose, but does not mention any genetic variants or genotypes (pharmacogenomics). |
| popPK | Chen_1996 | irrelevant | 0 | 0 | The study is a molecular cloning and pharmacological characterization of an ATP receptor in rat cells, where suramin is used only as a non-specific antagonist, not as the subject drug for PK analysis. |
| PGx | Chen_1996 | not_relevant | 0 | 0 | The paper describes the cloning and functional characterization of a rat pituitary ATP receptor, using suramin only as a pharmacological antagonist to verify receptor type, with no investigation into genetic variants affecting suramin's PK or PD. |
| popPK | Crickard_1994 | irrelevant | 0 | 0 | The study focuses on bFGF expression and suramin's in vitro cytotoxicity (IC50), reporting no pharmacokinetic parameters such as clearance, volume of distribution, or half-life. |
| PGx | Crickard_1994 | not_relevant | 0 | 0 | The paper investigates the correlation between FGF receptor expression levels and suramin sensitivity (IC50) in cell lines, which is a biological mechanism study rather than a pharmacogenomic analysis of how human genetic variants (SNPs/polymorphisms) affect drug PK or PD. |
| popPK | Dagni_2022 | irrelevant | 0 | 0 | Review of Dysphania essential oils; no suramin PK parameters reported. |
| popPK | Evans_1995 | irrelevant | 0 | 0 | no_text gate: only 106 chars of text extracted (&lt; 400) |
| PGx | Evans_1995 | not_relevant | 0 | 0 | The paper characterizes P2x purinoceptors and does not mention suramin or pharmacogenomic effects on its PK/PD. |
| popPK | Fairlamb_1980 | relevant | 5 | 2 | The study describes a two-compartment model for suramin in rats and fits data to exponential functions, but no specific numeric parameter values (CL, V, k12, etc.) are provided in the text. |
| PGx | Fairlamb_1980 | not_relevant | 0 | 0 | The paper describes the pharmacokinetics and mechanism of action of suramin in rats and trypanosomes but does not report any human gene variants or genotypes affecting these parameters. |
| popPK | Gan_2015 | irrelevant | 0 | 0 | The study focuses on pharmacodynamics (telomerase inhibition and telomere shortening) and provides no pharmacokinetic disposition parameters (CL, V, ka, half-life) for suramin. |
| PGx | Gan_2015 | not_relevant | 0 | 0 | The study investigates the pharmacodynamics of suramin on telomerase and telomere length but does not report a pharmacogenomic effect based on genetic variants. |
| popPK | Gratas_1993 | irrelevant | 0 | 0 | The study reports in-vitro enzyme inhibition (IC50) data for suramin, not pharmacokinetic disposition parameters. |
| PGx | Gratas_1993 | not_relevant | 0 | 0 | The paper reports in vitro enzyme inhibition kinetics (IC50) of suramin on phospholipase D but contains no information on gene variants or genotypes affecting PK/PD parameters. |
| popPK | Guyton_1996 | irrelevant | 0 | 0 | The paper is an in-vitro mechanistic study on MAPK activation by H2O2, and suramin is used only as a pretreatment agent to test growth factor receptor involvement, with no pharmacokinetic parameters reported. |
| PGx | Guyton_1996 | not_relevant | 0 | 0 | The paper investigates the effect of suramin on MAPK signaling and cell survival, not how a genetic variant affects suramin's pharmacokinetics or pharmacodynamics. |
| popPK | Ho_2015 | irrelevant | 0 | 0 | This is an in-vitro antiviral efficacy study of suramin against CHIKV (EC50 values only), with no PK disposition parameters (CL, V, half-life, or PK model) reported. |
| popPK | Hutson_1993 | relevant | 9 | 2 | The study describes a two-compartment PK model for suramin in humans and mentions a 3.8 h distribution phase, but specific numeric values for CL, V, and Q are not present in the provided text. |
| PGx | Hutson_1993 | not_relevant | 0 | 0 | The paper describes general pharmacokinetic parameters of suramin in cancer patients but does not investigate or report any gene variants, genotypes, or phenotypes affecting these parameters. |
| popPK | Hutson_1998 | irrelevant | 0 | 0 | no_text gate: only 88 chars of text extracted (&lt; 400) |
| PGx | Hutson_1998 | not_relevant | 0 | 0 | The paper describes a Phase I clinical trial of suramin focusing on renal clearance and tumor markers, but it does not report pharmacogenomic analysis (gene variants) affecting these parameters. |
| popPK | Hwu_2017 | irrelevant | 0 | 0 | The paper focuses on the antiviral activity of suramin analogs against chikungunya virus in vitro and does not report pharmacokinetic parameters for suramin. |
| PGx | Hwu_2017 | not_relevant | 0 | 0 | The paper does not report any gene variants or genotypes affecting the pharmacokinetics or pharmacodynamics of suramin. |
| popPK | Jacques-Silva_2004 | irrelevant | 0 | 0 | The paper is an in-vitro mechanistic study on P2X7 receptors and AKT phosphorylation, using suramin only as a receptor antagonist/control, and contains no pharmacokinetic data for suramin. |
| PGx | Jacques-Silva_2004 | not_relevant | 0 | 0 | The paper investigates astrocytic signaling pathways and is not related to pharmacogenomics of suramin. |
| popPK | Jia_2007 | irrelevant | 0 | 0 | The paper is an in-vitro neuroscience study where suramin is used as a P2 receptor antagonist (mechanistic probe), not a subject of pharmacokinetic analysis. |
| PGx | Jia_2007 | not_relevant | 0 | 0 | The paper studies the role of ATP in neuromuscular junction development and uses suramin as a receptor blocker tool compound; it does not report any genetic variant effects on the PK or PD of suramin. |
| popPK | Jones_2000 | irrelevant | 0 | 0 | The study is an in-vitro functional characterization of P2X(4) receptors where suramin is used as a non-selective antagonist probe, not as the subject drug for pharmacokinetic analysis. |
| PGx | Jones_2000 | not_relevant | 0 | 0 | The paper characterizes P2X4 receptor orthologues and notes that all are relatively suramin-insensitive, but it does not report a pharmacogenomic effect of a gene variant on the PK or PD of suramin. |
| popPK | Khakh_1995 | irrelevant | 0 | 0 | The study is an electrophysiological investigation of P2X-purinoceptors using suramin as a receptor antagonist, not a pharmacokinetic study of suramin's disposition. |
| PGx | Khakh_1995 | not_relevant | 0 | 0 | The paper studies electrophysiology of P2X receptors and uses suramin as a tool antagonist; it does not report a pharmacogenomic effect on suramin's PK or PD parameters. |
| popPK | Kilgore_2024 | irrelevant | 0 | 0 | The paper is a cell biology study focusing on the subcellular distribution of various drugs (including suramin) in live cells, not a pharmacokinetic study, and contains no PK parameter values. |
| PGx | Kilgore_2024 | not_relevant | 0 | 0 | The paper describes the subcellular localization and physical partitioning of drugs into biomolecular condensates, not pharmacogenomic effects on PK/PD parameters. |
| PGx | Kosarek_2006 | not_relevant | 0 | 0 | The paper evaluates the pharmacokinetics and efficacy of suramin in dogs but does not investigate the impact of genetic variants or genotypes on these parameters. |
| popPK | Kumar_1987 | irrelevant | 0 | 0 | no_text gate: only 94 chars of text extracted (&lt; 400) |
| PGx | Kumar_1987 | not_relevant | 0 | 0 | The paper is about the response of a parasite (Necator americanus) to anthelmintics and does not investigate suramin or pharmacogenomic effects on a PK/PD parameter. |
| popPK | Lambertucci_2015 | irrelevant | 0 | 0 | The paper is a medicinal chemistry review discussing suramin as a P2X receptor antagonist, with no quantitative pharmacokinetic disposition parameters reported. |
| PGx | Lambertucci_2015 | not_relevant | 0 | 0 | The paper is a medicinal chemistry review of P2X receptor ligands and does not report pharmacogenomic effects on suramin. |
| popPK | Lee_2006 | irrelevant | 0 | 0 | The study evaluates antiviral efficacy and EC50 values, not pharmacokinetic parameters, for suramin. |
| PGx | Lee_2006 | not_relevant | 0 | 0 | The paper compares the antiviral efficacy of suramin and other compounds but does not report any pharmacogenomic effects (gene variants) on its pharmacokinetic or pharmacodynamic parameters. |
| popPK | Leverrier_2013 | irrelevant | 0 | 0 | The study is an in-vitro medicinal chemistry paper evaluating the antiparasitic activity of novel compounds, with suramin used only as a comparative reference for activity (IC50) rather than as a subject of pharmacokinetic analysis. |
| PGx | Leverrier_2013 | not_relevant | 0 | 0 | The paper reports the synthesis and in vitro activity of new antiparasitic hybrids, comparing their IC50 to suramin, but does not study pharmacogenomics or PK/PD parameters of suramin itself. |
| popPK | Liu_2002 | irrelevant | 0 | 0 | Suramin is used as a pharmacological antagonist to inhibit purinergic receptors in an in-vitro study, not as a subject drug for PK analysis. |
| PGx | Liu_2002 | not_relevant | 0 | 0 | The paper investigates purinergic receptor signaling in macula densa cells and uses suramin as a pharmacological tool, but it does not report any pharmacogenomic effects on the PK or PD of suramin. |
| popPK | Mallard_1992 | irrelevant | 0 | 0 | The study is a pharmacological investigation of suramin's mechanism of action on the rat vas deferens and does not report pharmacokinetic parameters like clearance or volume of distribution. |
| PGx | Mallard_1992 | not_relevant | 0 | 0 | The paper studies the pharmacological mechanism of suramin on a tissue and does not investigate genetic variants or pharmacogenomic effects on its PK/PD. |
| popPK | Masson_1997 | irrelevant | 0 | 0 | This is a review article that lists suramin as a potential agent for future individualization but provides no original pharmacokinetic data or quantitative parameters for suramin. |
| PGx | Masson_1997 | not_relevant | 2 | 1 | Suramin is only listed as a potential candidate for future individualization; the text is a general review of chemotherapy PK optimization and does not report specific pharmacogenomic effects on suramin's PK or PD. |
| popPK | Matern_2021 | irrelevant | 0 | 0 | This is a Tn-seq study of M. avium antibiotic tolerance genes; suramin is only mentioned as a chemical RecA inhibitor, with no PK parameters for suramin. |
| popPK | McCain_2004 | irrelevant | 0 | 0 | The paper investigates suramin as a pharmacodynamic inhibitor of protein-tyrosine phosphatases in vitro and does not report any pharmacokinetic parameters (clearance, volume, half-life, etc.). |
| PGx | McCain_2004 | not_relevant | 0 | 0 | The paper reports on the chemical synthesis and in vitro enzymatic activity of suramin analogs, containing no information on pharmacogenomics, genotypes, or clinical pharmacokinetic/pharmacodynamic parameters. |
| popPK | McCoy_2021 | irrelevant | 0 | 0 | This is a knowledge-graph link prediction/drug repurposing paper; suramin is only a predicted candidate with no PK parameters. |
| popPK | Murrin_1992 | irrelevant | 0 | 0 | This is an in vitro mechanistic study on PC12 cells where suramin is used only as a nonspecific antagonist, not a subject of PK analysis. |
| PGx | Murrin_1992 | not_relevant | 0 | 0 | The paper investigates the pharmacology of nucleotide receptors in PC12 cells using suramin only as a nonspecific antagonist; it does not report any pharmacogenomic effects on suramin's PK or PD parameters. |
| popPK | Nakazawa_1994 | irrelevant | 0 | 0 | Suramin is only used as a purinoceptor antagonist in an in vitro electrophysiology study of rat neurons; no PK parameters for suramin are reported. |
| PGx | Naviaux_2017 | not_relevant | 0 | 0 | The paper reports standard clinical trial outcomes and PK parameters but does not investigate gene variants or pharmacogenomic effects on suramin's PK or PD. |
| popPK | Ono_1997 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics and antiviral activity of FP-21399, using suramin only as a comparator agent without reporting specific PK parameters for suramin. |
| PGx | Ono_1997 | not_relevant | 0 | 0 | The paper discusses the PK of a new compound (FP-21399) and mentions suramin only as a comparator; it does not report any gene variants affecting suramin's pharmacokinetics or pharmacodynamics. |
| popPK | Pedron_2020 | irrelevant | 0 | 0 | Suramin is only an in vitro EC50 comparator; the PK data (half-life 2.9 h) concern compound 12, not suramin, and full PK values are in supplementary Figure S17. |
| popPK | Piscitelli_1997 | relevant | 10 | 4 | The paper reports a population PK analysis for suramin in humans with specific model parameters (three-compartment), but the abstract only provides the percentage change in clearance (36%) rather than the absolute numeric parameter values (CL, V, ka) which are likely in the full text tables not provided in this snippet. |
| PGx | Piscitelli_1997 | not_relevant | 0 | 0 | The study evaluates a drug-drug interaction (furosemide) rather than a pharmacogenomic effect (genotype/phenotype). |
| popPK | Poletto_2008 | irrelevant | 0 | 0 | The study investigates the pharmacology of chloride channels in mouse Leydig cells, using suramin only as a channel blocker rather than studying its pharmacokinetics. |
| PGx | Poletto_2008 | not_relevant | 0 | 0 | The paper describes the biophysical characterization of volume-activated chloride channels and their inhibition by suramin in mouse Leydig cells, but does not involve genetic variants or pharmacogenomic effects on suramin's PK or PD parameters. |
| popPK | Reyno_1995 | irrelevant | 2 | 0 | The paper describes a clinical dosing schedule validation and toxicity/efficacy outcomes, but does not report quantitative pharmacokinetic parameter values (such as CL, V, or t1/2) for suramin. |
| PGx | Reyno_1995 | not_relevant | 0 | 0 | The paper describes a fixed dosing scheme based on population PK parameters but does not report any pharmacogenomic effects (gene variants) on suramin's PK or PD. |
| popPK | Rosen_1996 | irrelevant | 4 | 0 | The paper describes a clinical trial using a Bayesian PK model to guide dosing but reports efficacy outcomes and target plasma concentrations rather than extracting quantitative PK parameters (CL, V, ka) for the population. |
| PGx | Rosen_1996 | not_relevant | 0 | 0 | The paper reports clinical efficacy and general pharmacokinetic dosing strategies for suramin but contains no data regarding gene variants or genotypes affecting PK or PD parameters. |
| PGx | Scher_1992 | not_relevant | 0 | 0 | The paper discusses pharmacokinetic modeling and adaptive control for suramin but does not report any pharmacogenomic (genetic variant) effects on PK or PD parameters. |
| popPK | Schärfe_2017 | irrelevant | 0 | 0 | This is a pharmacogenomics variant-frequency study of drug target genes; no PK parameters for suramin (or any drug) are reported. |
| popPK | Stones_1994 | irrelevant | 0 | 0 | The paper is a study on the pharmacology of the human ovarian vein where suramin is used only as a tool compound to block P2-purinoceptors, not as a subject drug for pharmacokinetic analysis. |
| PGx | Stones_1994 | not_relevant | 0 | 0 | The study investigates the pharmacology of human ovarian vein and does not report pharmacogenomic effects on the PK/PD of suramin. |
| popPK | Tan_2012 | irrelevant | 0 | 0 | The paper describes an in-vitro biochemical assay for RISC loading where suramin is tested as a small-molecule inhibitor, reporting no pharmacokinetic parameters like clearance or volume. |
| PGx | Tan_2012 | not_relevant | 0 | 0 | The paper identifies suramin as a RISC loading inhibitor in a biochemical assay, but does not report any pharmacogenomic effects or gene variant influences on its pharmacokinetic or pharmacodynamic parameters. |
| popPK | Thomson_1999 | irrelevant | 0 | 0 | This is a population PK study of HPMA copolymer-bound doxorubicin (PK1), not suramin; no suramin parameters appear anywhere. |
| popPK | Townsend-Nicholson_1999 | irrelevant | 0 | 0 | no_text gate: only 117 chars of text extracted (&lt; 400) |
| PGx | Townsend-Nicholson_1999 | not_relevant | 0 | 0 | The paper focuses on the molecular cloning and characterization of murine P2X4 receptors and does not mention suramin or any pharmacogenomic effects on its PK/PD parameters. |
| popPK | Vishwanath_2023 | irrelevant | 0 | 0 | Suramin is only used as a reference compound for molecular docking and structural comparison, not as the subject of the pharmacokinetic study. |
| PGx | Vishwanath_2023 | not_relevant | 0 | 0 | The paper reports PK data for a new compound (5d) in rats but does not investigate the effect of genetic variants on the PK or PD of suramin. |
| popPK | Volsky_1992 | irrelevant | 0 | 0 | This is an in-vitro virology study measuring antiviral efficacy (EC50) of suramin, not a pharmacokinetic study reporting disposition parameters like clearance or volume. |
| PGx | Volsky_1992 | not_relevant | 0 | 0 | The paper evaluates in vitro antiviral activity of suramin but does not report any pharmacogenomic effects or genetic variants influencing PK or PD parameters. |
| popPK | Wang_2014 | irrelevant | 0 | 0 | The paper describes in vitro antiviral activity (IC50) of suramin against EV71 and contains no pharmacokinetic or disposition parameters. |
| PGx | Wang_2014 | not_relevant | 0 | 0 | The paper reports the antiviral efficacy of suramin against EV71 but does not investigate pharmacogenomic variants affecting its PK or PD. |
| popPK | Wilkinson_1993 | irrelevant | 0 | 0 | The study focuses on the pharmacology of purinoceptors in bovine aortic endothelial cells, using suramin only as a competitive antagonist to characterize receptor subtypes, rather than measuring its pharmacokinetic parameters. |
| PGx | Wilkinson_1993 | not_relevant | 0 | 0 | The paper describes the pharmacological properties of suramin as a receptor antagonist in vitro, not a pharmacogenomic effect on PK/PD. |
| popPK | Windebank_1994 | irrelevant | 0 | 0 | The study is an in-vitro investigation of cisplatin neurotoxicity where suramin is only used as a negative control to demonstrate the specificity of the neuroprotective effects. |
| PGx | Windebank_1994 | not_relevant | 0 | 0 | The paper studies the prevention of cisplatin neurotoxicity by neurotrophic factors in a rat model, mentioning suramin only as an unrelated control; it contains no information on gene variants affecting suramin's pharmacokinetics or pharmacodynamics. |
| popPK | Yadav_2020 | irrelevant | 0 | 0 | This is a mechanistic study on Leishmania donovani where suramin is used as a probe drug to demonstrate target inhibition, with no population-pharmacokinetic parameter estimation for suramin itself. |
| PGx | Yadav_2020 | not_relevant | 0 | 0 | The paper studies a drug target (LdTCP1γ) in Leishmania and does not report human pharmacogenomic effects on the pharmacokinetics or pharmacodynamics of suramin. |
| popPK | Zheng_2023 | irrelevant | 0 | 0 | The study focuses on the antidepressant effects of electroacupuncture in rats, using suramin only as a pharmacological antagonist to block effects, not as the subject of a pharmacokinetic analysis. |
| PGx | Zheng_2023 | not_relevant | 0 | 0 | The paper uses suramin as a receptor antagonist to block a treatment effect and does not report pharmacogenomic modulation of suramin's PK or PD parameters. |
| popPK | Zhong_2000 | irrelevant | 0 | 0 | no_text gate: only 107 chars of text extracted (&lt; 400) |
| PGx | Zhong_2000 | not_relevant | 0 | 0 | The paper discusses P2X receptor pharmacology in ganglia and does not mention suramin or any pharmacogenomic effects. |
| popPK | van_1992 | relevant | 9 | 3 | The paper describes a population pharmacokinetic model and Bayesian dosing for suramin in cancer patients, but the evidence provided contains only drug concentrations (micrograms/mL) and dosing regimens, not explicit quantitative PK parameter values like CL or V. |
| PGx | van_1992 | not_relevant | 0 | 0 | The paper describes dosing regimens and Bayesian pharmacokinetic modeling but does not investigate the impact of genetic variants on suramin's PK or PD parameters. |
| popPK | von_1995 | irrelevant | 0 | 0 | Suramin is used only as a pharmacological antagonist tool compound in an in-vitro vascular pharmacology study, with no pharmacokinetic parameters reported. |
| PGx | von_1995 | not_relevant | 0 | 0 | The paper studies the pharmacological mechanism of suramin as a P2x antagonist in blood vessels and does not report any pharmacogenomic effect (gene variant) on suramin's pharmacokinetics or pharmacodynamics. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this page](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bsuramin%5D&body=Drug%3A%20suramin%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_suramin/%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · newest extraction 2026-11-24 06:57 UTC</sub>
